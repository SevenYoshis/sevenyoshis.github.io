# How to Add New Blog Posts

The blog is an inbox: posts are email rows in `blog.html`, and clicking a row opens the post like an opened email.

## Native post (written in Markdown)

1. **Write the post** — add a Markdown file in `posts/`, named after the slug, e.g. `posts/my-new-post.md`. Plain prose works; an optional `---` frontmatter block at the top is stripped when the post is displayed. `**bold**` renders as bold.
2. **Add one entry at the TOP of the `POSTS` array** in `blog.html` (newest first):
   `{ slug: '<slug>', title: '<title>', subject: '<subject line>', date: 'Mon DD, YYYY', dateFull: 'Weekday, Mon DD, YYYY', snippet: '<first line or teaser>' }`
   - `title` is the big headline in the opened email; `subject` is the row text and the subject line in the details panel. Usually the same — except when they differ, e.g. title "am i risking enough?" with subject "running out of validation".
   - `date` is the short date on the row; `dateFull` is the full stamp in the opened email (weekday + date; add a time only when it's actually known).
   - `snippet` is the grey teaser after the subject on the row — the post's first line works well.
3. **Done** — the row renders from the array, the body is fetched from `posts/<slug>.md` when the post is opened, and the deep link `https://savan.studio/blog.html#<slug>` works automatically.

## Substack post (embedded)

Same as above, plus `embed: 'substack'`, `mailedBy: 'substack.com'`, `signedBy: 'substack.com'` on the entry — and paste Substack's official embed snippet (Share → More → Embed on the post) into the hidden `#substack-embed-source` div in `blog.html`. The embed renders as a preview card, not the full essay text. A plain iframe of a Substack post does NOT work (Substack's CSP blocks framing from savan.studio).

## Notes

- Read/unread state is per-visitor, stored in the browser (localStorage key `savan-blog-read-v1`); opening a post marks it read and drops the unread count.
- The reply box at the bottom of an open post composes an email to savan@duck.com with the subject pre-filled ("Re: \<title\>").
- The inbox list, search, All mail / Unread tabs, and mark-all-read are all in the inline script at the bottom of `blog.html`; inbox styling lives at the end of `css/style.css` (search for "Inbox blog").
- The old stacked-card layout is gone; the old `.blog-post` / `#blog-overlay` styles still sit in `css/style.css` unused.
