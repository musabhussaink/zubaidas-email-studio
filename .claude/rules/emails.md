---
paths:
  - "campaigns/**/emails/*.md"
---

# Rules for email files

These rules apply to every email file in any campaign's `emails/` folder. Every email file must follow all five.

1. **Subject and preview first.** The first line is `Subject: ...` and the second line is `Preview: ...`. Nothing goes above them.
   - The subject is 50 characters or fewer, not counting `Subject: `.
   - The preview is 90 characters or fewer, not counting `Preview: `.

2. **Greet the reader by first name.** The greeting uses the placeholder `{{first_name}}`, for example `Hi {{first_name}},`. Never put a real or made-up name in its place.

3. **One main link only.** Each email has exactly one main link, written like this:

   `[Button text](https://kettlebird.example/steep-club)`

   Change the button text to suit the email, but keep the address exactly as shown. Don't add a second main link.

4. **End with our sign-off.** After the main message, use a closing line and sign-off from section 5 ("How we sign off") of `brand/voice.md`.

5. **Then the footer, as plain text.** After the sign-off, end the email with these two lines exactly. Don't put them in a code block and don't change the wording:

You're getting this because you joined the Kettlebird Tea waitlist.
Kettlebird Tea, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Nothing comes after the footer.
