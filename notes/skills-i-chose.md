# Skills I chose

Researched on 15 Nov 2026 with `npx skills find` (skills.sh) and the GitHub API. Nothing has been installed yet.

## Use these

**1. Writing campaigns: `anthropics/knowledge-work-plugins`**
Skills: `campaign-plan` and `email-sequence` (both in its `marketing/` folder).
- Published by Anthropic, the company that makes Claude. Its GitHub organisation is verified.
- The repo has about 36,000 stars, an Apache-2.0 licence, and was updated two days ago.
- It covers both jobs we need: planning a campaign and writing the email sequence for it.
- Install counts are lower than some alternatives (3,100–3,400), and I don't know why. A low count isn't a sign of low quality, and we're choosing it for the publisher and the fit.

**2. Sending email: `resend/resend-skills`**
Skill: `resend` (the same repo also has `resend-cli`, `react-email` and `email-best-practices`).
- Published by Resend, the email-sending company, under its own `resend` organisation. The same organisation owns React Email, which has about 20,000 stars.
- The skills repo itself has 212 stars, an MIT licence, about 24,700 installs, and was updated last week.
- It comes from the same people who run the sending service, so it should stay in step with their API.
- One thing to know: Resend's GitHub organisation is not marked as verified. It does link to resend.com, and its history (React Email, resend-cli) makes it clearly the real company.
- This is a deliberate exception to rule 2 below: 212 stars for about 24,700 installs is a big gap. It passes because check 1 is strong. The publisher is the real company, and its main repo (React Email) has about 20,000 stars.

Runner-up for writing: `coreyhaines31/marketingskills@emails`. It used to be called `email-sequence` and was renamed to `emails` in May 2026. skills.sh still shows an old `email-sequence` page, so install `emails`. It is very popular, with about 60,000 stars, about 89,000 installs and an MIT licence, but it is maintained by one person rather than a company. It is a good second opinion if the Anthropic skills feel too general.

## Avoid these

**1. `caffeinelabs/skills@extension-email-marketing`**
- It is the top result for "email marketing" with about 31,700 installs, but the repo has only **2 stars**, 1 fork and no description. That big a gap between installs and stars suggests the installs come from automated or in-platform use, not from people choosing it.
- The repo is made of Motoko packages for Caffeine's own platform, so this skill is built for their system, not a general email studio.
- The publisher is a real, verified company. The problem is that the skill doesn't fit what we need.

**2. `membranedev/application-skills@resend`**
- It has "resend" in its name but is **not from Resend**. It is a third-party wrapper.
- It is published from a personal account, has **no licence**, and lives in a repo of over 6,000 files that looks mass-generated, with one skill per app.
- If we want Resend, we should get it from Resend.

Other look-alikes to watch for: `ihlamury/design-skills@resend-ui-skills` (UI styling rules, no licence, not from Resend), and `okou-ai`, `oakoss` and `resend.com@Resend` (17 installs). They all borrow the Resend name.

## How I decided

Check these three things before installing any skill:

1. **Who publishes it?** Is it the company itself (for example `anthropics/` or `resend/`) or someone using their name? Open the GitHub owner's page and check that it links to the real website.
2. **Do stars and installs tell the same story?** A healthy repo has stars and installs that roughly match. High installs with almost no stars, like the Caffeine Labs skill, is a red flag. Also check for a licence and a recent update.
3. **What's actually inside?** Read the `SKILL.md` and any scripts before installing. A skill can run commands and handle API keys, so make sure it does only what its name says and doesn't send data anywhere unexpected.
