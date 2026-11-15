---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign for each lead group

Campaign folder: $ARGUMENTS

## 1. Check the campaign folder

- **If no campaign folder was given:** stop. Use Glob on `campaigns/*/*` to find the folders inside `campaigns/`, then reply with this list and nothing else:

  > Which campaign? Run `/personalize campaigns/<name>`. Campaign folders:
  > - campaigns/<name>
  > - ...

- **If the folder doesn't exist, or has no `emails/` folder with email files in it:** stop and say so, then list the campaign folders as above.

## 2. Read what you need

1. **The emails:** every `.md` file directly inside `<campaign folder>/emails/`, except `README.md`. Don't read or rewrite anything already inside `<campaign folder>/groups/`.
2. **The groups:** read `leads/leads.csv` and collect the unique values in the `group` column (currently `tea-curious`, `gift-buyers` and `daily-drinkers`). Use only the group names. Never copy a lead's name, email or other details into an email.
3. **The rules:** `brand/voice.md` and `.claude/rules/emails.md`. Every version must still follow both.
4. **The facts:** the campaign's `plan.md` and any facts file in the folder, to understand what each group cares about.

## 3. Check before writing

If any file you would write in step 4 already exists, stop before writing anything. List the files that already exist and ask the user whether to replace them. Don't overwrite anything without their say-so.

## 4. Write one version per email per group

For each email and each group, copy the email and change **only two things**:

1. **The opening line:** the first sentence after the greeting. Rewrite it so it speaks to that group:
   - `tea-curious`: new to tea, wants an easy and friendly way to start.
   - `gift-buyers`: buying for someone else, cares about how it works as a gift.
   - `daily-drinkers`: already drinks tea every day, wants variety and good value.
   - Any other group: work out what they care about from the group name and the campaign plan.
2. **One example:** pick one example, scenario or illustration in the body and adjust it to fit the group. Change only one.

**Keep everything else exactly the same**, word for word:
- the `Subject:` and `Preview:` lines
- the `Hi {{first_name}},` greeting and every other `{{...}}` placeholder
- the main link, both its button text and its address
- the headings, section order and structure
- every `[PLACEHOLDER: ...]` and `[CONFIRM: ...]` marker. Don't fill them in or remove them.
- the closing line, the sign-off and the two-line footer

**Don't add facts.** The new opening line and example must not add any price, delivery date, offer, deadline, product detail, health claim or other claim that isn't already in the original email or the campaign's facts. If the example you'd change depends on an unconfirmed fact, pick a different example. Follow the "Claims we must never make" and "Words we avoid" sections of `brand/voice.md`.

Save each version to `<campaign folder>/groups/<group>/emails/<same file name>`.

## 5. Reply with a short summary only

Reply with just this, and no other commentary:

> Wrote <N> files (<emails> emails × <groups> groups) to `<campaign folder>/groups/`.
>
> - **tea-curious:** "<opening line from the first email>"
> - **gift-buyers:** "<opening line from the first email>"
> - **daily-drinkers:** "<opening line from the first email>"

If you skipped anything, add one line saying what and why.
