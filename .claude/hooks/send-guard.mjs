// PreToolUse hook for the Resend MCP server.
// Exit 0 allows the tool call. Exit 2 blocks it, and the reason on stderr is shown to Claude.
// Anything unexpected blocks: a guard that fails open is no guard.

const ADDRESS_TOOLS = new Set(["send-email", "send-batch-emails"]);

// These reach whole segments or inboxes, so no per-address check can make them safe.
const ALWAYS_BLOCKED = new Set([
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
]);

const ALLOWED_DOMAIN = "@resend.dev";
const RECIPIENT_FIELDS = ["to", "cc", "bcc"];

function block(reason) {
  process.stderr.write(`Blocked by send-guard: ${reason}\n`);
  process.exit(2);
}

function readStdin() {
  return new Promise((resolve, reject) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => (data += chunk));
    process.stdin.on("end", () => resolve(data));
    process.stdin.on("error", reject);
  });
}

// "Name <a@b.com>" -> "a@b.com"; also trims and lowercases for comparison.
function normalize(address) {
  const match = /<([^>]+)>/.exec(address);
  return (match ? match[1] : address).trim().toLowerCase();
}

function toList(value) {
  if (value === undefined || value === null) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return value.split(",");
  return [value];
}

function recipientsOf(message) {
  return RECIPIENT_FIELDS.flatMap((field) => toList(message?.[field]));
}

function isAllowed(address, myEmail) {
  if (typeof address !== "string") return false;
  const email = normalize(address);
  return email.endsWith(ALLOWED_DOMAIN) || (myEmail !== "" && email === myEmail);
}

function checkRecipients(toolName, toolInput, myEmail) {
  const messages = toolName === "send-batch-emails" ? toolInput.emails : [toolInput];
  if (!Array.isArray(messages)) block(`${toolName} has no list of emails to check.`);

  for (const message of messages) {
    const recipients = recipientsOf(message);
    if (recipients.length === 0) block(`${toolName} has an email with no recipients to check.`);
    const bad = recipients.find((address) => !isAllowed(address, myEmail));
    if (bad !== undefined) {
      block(
        `${String(bad).trim()} is not allowed. Send only to ${ALLOWED_DOMAIN} test addresses or to MY_EMAIL.`,
      );
    }
  }
}

async function main() {
  let call;
  try {
    call = JSON.parse(await readStdin());
  } catch {
    block("could not read the tool call, so it was not allowed.");
  }

  const fullName = String(call?.tool_name ?? "");
  const toolName = fullName.replace(/^mcp__resend__/, "");
  const myEmail = normalize(process.env.MY_EMAIL ?? "");

  if (ALWAYS_BLOCKED.has(toolName)) {
    block(`${toolName} can reach whole lists of people, so it is never allowed from this studio.`);
  }

  if (ADDRESS_TOOLS.has(toolName)) {
    checkRecipients(toolName, call?.tool_input ?? {}, myEmail);
  }

  process.exit(0);
}

main();
