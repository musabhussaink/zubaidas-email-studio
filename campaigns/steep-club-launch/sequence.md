# The Steep Club launch: email sequence

> **Drafts only.** Nothing here is sent or scheduled. Practice brand (Kettlebird Tea), made-up leads.

These are emails E1 to E4 from the content calendar in `plan.md` (weeks 1 and 2). E5 to E8 aren't written yet.

## Overview

| # | File | Send | Who gets it | Purpose | Button |
|---|---|---|---|---|---|
| E1 | `emails/01-club-is-open.md` | Mon 7 Dec | Everyone on the waitlist | Announce the launch and explain how it works | Join The Steep Club |
| E2 | `emails/02-made-for-you.md` | Thu 10 Dec | Not yet subscribed | Show each group how the box fits them | See how The Steep Club works |
| E3 | `emails/03-inside-the-first-box.md` | Tue 15 Dec | Not yet subscribed | Show the real first box | Join The Steep Club |
| E4 | `emails/04-your-questions.md` | Fri 18 Dec | Not yet subscribed | Answer doubts about price, delivery, skipping, cancelling and gifting | Join The Steep Club |

All buttons go to `https://kettlebird.example/steep-club`. Add a tag for the email and the group in your email platform, as `plan.md` section 4 asks.

## Flow

```
[Waitlist] --> E1 (Mon 7 Dec) --joined?--> [EXIT: welcome email]
                 |
                 v
               E2 (Thu 10 Dec) --joined?--> [EXIT]
                 |
                 v
               E3 (Tue 15 Dec) --joined?--> [EXIT]
                 |
                 v
               E4 (Fri 18 Dec) --joined?--> [EXIT]
                 |
                 v
               E5 to E8 (not written yet)
```

## Sending rules

- **Exit:** anyone who subscribes stops getting launch emails and gets the welcome email instead.
- **Limit:** no more than two emails a week per person. This schedule keeps to that.
- **Skip:** anyone who has unsubscribed or bounced.
- **No re-entry:** someone who cancels later doesn't restart this sequence.

## Before any of these can be sent

Every `[PLACEHOLDER: ...]` must be filled in or its line removed, and every `[CONFIRM: ...]` checked. These are the open decisions from `plan.md` section 10:

1. Price per box, and any discount for paying ahead (E1, E3, E4)
2. What's in the first box: teas, amounts, extras and a photo (E1, E2, E3)
3. Subscription terms: skip, pause and cancel, including whether "you won't be stuck" is true (E1, E2, E4)
4. Whether there's a launch offer, and its real end date. This also decides E4's closing line (E1, E3, E4)
5. Gift options, gift lengths and any real holiday delivery cutoff (E1, E2, E4)
6. Delivery timing, areas and charges (E1, E4)
7. Whether every tea comes with brewing notes, and whether the first box needs a teapot or infuser (E1, E2, E4)
8. Any quote from someone who tried a sample box, only with their permission (E3)
9. Whether boxes are the same for everyone or picked per person. E1 says "chosen by us" (E1)
10. The exit rule is set up and the welcome email is written, because E1 promises that launch emails stop when someone joins (E1)
11. The `{{first_name}}` fallback is set to `there` in the email platform (all)

## Ideas to test

- **E1 subject:** "The Steep Club is open" against "Your first box of tea is ready to order". Split 50/50 and pick the one with more sign-ups, not just more opens.
- **E2 format:** this single email for everyone against three separate versions, one per group (`group` is already in `leads/leads.csv`). Compare sign-ups by group.
- **E4 placement:** if many people click but don't sign up, try sending E4 earlier.

## What to track

Use the targets and weekly pace in `plan.md` section 7. For each email: clicks, sign-ups and unsubscribes, split by group.
