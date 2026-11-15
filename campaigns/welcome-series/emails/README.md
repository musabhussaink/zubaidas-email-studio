# Welcome series email drafts

> **Practice drafts.** An educational exercise, not approved by Zubaidas. These emails go only to synthetic test addresses in a Mailtrap test inbox. Never send them to real people.

| File | Email | Day | Who gets it |
|---|---|---|---|
| `e1-welcome.md` | Welcome to Zubaidas | 0 | Everyone |
| `e2-made-for-your-stage.md` | Made for your stage | 2 | By stage (4 versions + general) |
| `e3-how-shopping-works.md` | How shopping with us works | 5 | Everyone |
| `e4-a-little-help.md` | A little help from us | 10 | By stage (4 versions + general) |
| `e5-thoughtfully-selected.md` | Thoughtfully selected for you | 17 | Not yet ordered, by stage |
| `e6-how-can-we-help.md` | How can we help? | 24 | Everyone |

## Merge tags

These are plain placeholders, so they can be mapped to any platform later (Mailtrap now, Klaviyo or another platform later).

| Tag | Meaning | If missing |
|---|---|---|
| `{{first_name}}` | Subscriber's first name | Use "Hi there," and never guess a name |
| `{{stage_link_expecting}}`, `{{stage_link_baby}}`, `{{stage_link_toddler}}`, `{{stage_link_gift}}` | One-click links that record the subscriber's stage | Required for E1 |
| `{{stage_link_choose}}` | Link to a page with the 4 stage choices | Used in the general versions of E2 and E4 |
| `{{unsubscribe_url}}` | Unsubscribe link | **Required in every email** |

## Markers

- `[PLACEHOLDER: ...]`: information that isn't published. Don't send until it's filled in or the line is removed.
- `[CONFIRM: ...]`: published, but unclear or conflicting. Check it before sending.
- `[PRICE: check on build day]`: prices change. Check the live product page.

All facts are in `../facts.md`.

## Shared footer (goes at the end of every email)

```
The Zubaidas Team
Website: https://zubaidas.com/
Need help? Email info@zubaidas.com, or call or WhatsApp +92 321 2000561.
Live chat: 10:00 am to 7:00 pm, Monday to Saturday (not on public holidays).
Instagram: https://www.instagram.com/zubaidasofficial · Facebook: https://www.facebook.com/ZubaidasOfficial · YouTube: https://www.youtube.com/@zubaidasofficial/ · TikTok: https://www.tiktok.com/@zubaidas.official

You're getting this email because you signed up for emails from Zubaidas.
Unsubscribe: {{unsubscribe_url}}
```

We don't invite replies, because we don't know if anyone reads that inbox. See `../facts.md`, section 4.
