#!/usr/bin/env node
// Headless brand review of a campaign folder.
// Usage: node scripts/review.mjs campaigns/<campaign>
// Writes review/findings.json. Exits 1 if any finding is high severity, 2 if the review itself fails.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = join(repoRoot, "review", "findings.schema.json");
const outputPath = join(repoRoot, "review", "findings.json");

function fail(message) {
  console.error(`review: ${message}`);
  process.exit(2);
}

function campaignFolderFromArgs() {
  const arg = process.argv[2];
  if (!arg) fail("usage: node scripts/review.mjs <campaign-folder>");

  const absolute = resolve(arg);
  if (!existsSync(absolute) || !statSync(absolute).isDirectory()) {
    fail(`not a folder: ${arg}`);
  }
  const fromRoot = relative(repoRoot, absolute);
  if (fromRoot.startsWith("..")) fail(`folder must be inside the repo: ${arg}`);
  return fromRoot;
}

function runClaude(folder) {
  const schema = readFileSync(schemaPath, "utf8");
  const prompt =
    `Review every email in ${folder} against brand/voice.md and .claude/rules/emails.md. ` +
    "Report only real problems.";

  // Arguments go straight to the process (no shell), so the folder name can't inject commands.
  const result = spawnSync(
    "claude",
    ["-p", prompt, "--output-format", "json", "--json-schema", schema, "--allowedTools", "Read,Glob,Grep"],
    { cwd: repoRoot, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 },
  );

  if (result.error) fail(`could not start claude: ${result.error.message}`);
  if (result.status !== 0) {
    fail(`claude exited with code ${result.status}\n${result.stderr || result.stdout}`);
  }
  return result.stdout;
}

// The CLI prints either one result object or a list of messages whose last item is the result.
function structuredOutputFrom(stdout) {
  let parsed;
  try {
    parsed = JSON.parse(stdout);
  } catch (error) {
    fail(`claude output was not JSON: ${error.message}`);
  }

  const result = Array.isArray(parsed) ? parsed.at(-1) : parsed;
  if (!result || result.is_error) fail(`claude reported an error: ${JSON.stringify(result)}`);

  const output = result.structured_output;
  if (!output || !Array.isArray(output.findings)) {
    fail("claude result had no structured_output.findings");
  }
  return output;
}

const folder = campaignFolderFromArgs();
const output = structuredOutputFrom(runClaude(folder));
writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);

const counts = { high: 0, medium: 0, low: 0 };
for (const finding of output.findings) counts[finding.severity] = (counts[finding.severity] ?? 0) + 1;

console.log(
  `${folder}: ${output.findings.length} findings ` +
    `(${counts.high} high, ${counts.medium} medium, ${counts.low} low) -> review/findings.json`,
);
process.exit(counts.high > 0 ? 1 : 0);
