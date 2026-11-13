# How to Add New Blog Posts

## Quick Guide

1. **Write the post** — add a Markdown file in `posts/`, named after the slug, e.g. `posts/my-new-post.md`. Plain prose works; an optional `---` frontmatter block at the top is stripped when the post is displayed.

2. **Add it to `blog.html`** — copy one of the existing `<article>` blocks and change:
   - the wrapper id to `post-my-new-post`
   - the `onclick` to `loadAndDisplayPost('my-new-post')`
   - the title, date, summary, and email-header subject

That's it — the post shows up in the list automatically.

## Direct links

Every post is linkable. Share `https://savan.studio/blog.html#my-new-post` and the reader lands on the blog with that post already expanded and scrolled into view. The older `#post-my-new-post` form works too.

Clicking "read more" on a post also puts its link in the address bar, so you can just copy the URL from there.

## How it works

- `blog.html` lists the posts; each post's full text lives in `posts/<slug>.md` and is fetched when the reader clicks "read more".
- The inline script at the bottom of `blog.html` handles expanding/collapsing, the `#slug` deep link on load and on hash change, and updating the URL when a post is opened or collapsed.
