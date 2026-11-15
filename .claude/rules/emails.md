---
paths:
  - "campaigns/**/emails/*.md"
---

# Rules for email files

These rules apply to every email file in any campaign's `emails/` folder. Every email file must follow all five.

1. **Subject and preview first.** The first line is `Subject: ...` and the second line is `Preview: ...`. Nothing goes above them.
   - The subject is 50 characters or fewer, not counting `Subject: `.
   - The preview is 90 characters or fewer, not counting `Preview: `.

2. **Greet the reader by first name.** The greeting uses the placeholder `{{first_name}}`, for example `Hi {{first_name}},`. Never put a real or made-up name in its place. In the email platform, set the fallback for `{{first_name}}` to `there`, so anyone without a first name gets `Hi there,` (as `brand/voice.md` asks).

3. **One main link only.** Each email has exactly one main link, written like this:

   `[Button text](https://kettlebird.example/steep-club)`

   Change the button text to suit the email, but keep the address exactly as shown. Don't add a second main link.

4. **End with our sign-off.** After the main message, use one of the closing lines from section 5 ("How we sign off") of `brand/voice.md`. Sign as the team of the brand the campaign is for, never one person. For Kettlebird Tea, that's `The Kettlebird Tea Team`. The website, support and social links in section 5 don't go in these emails: rule 3 allows only one main link and rule 5 sets the footer.

5. **Then the footer, as plain text.** After the sign-off, end the email with these two lines exactly. Don't put them in a code block and don't change the wording:

You're getting this because you joined the Kettlebird Tea waitlist.
Kettlebird Tea, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Nothing comes after the footer.
