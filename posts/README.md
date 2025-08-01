# Blog Posts Directory

This directory contains all your blog posts in markdown format.

## How to Add a New Post

1. Create a new `.md` file in this directory (e.g., `my-new-post.md`)
2. Use the following format:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
subject: "Your Email Subject"
---

Your post content goes here. You can use:

- **Bold text** with `**bold**`
- *Italic text* with `*italic*`
- `Code snippets` with backticks
- Line breaks for paragraphs

Just write naturally in markdown!
```

3. Add the filename to the `postFiles` array in `blog.html`:

```javascript
const postFiles = ['spaghetti-incident.md', 'coffee-shop.md', 'my-new-post.md'];
```

## File Naming Convention

- Use lowercase with hyphens (e.g., `my-post-title.md`)
- The filename becomes the post ID (e.g., `my-post-title`)
- Direct links will work as `blog.html#post-my-post-title`

## Supported Markdown Features

- **Bold**: `**text**`
- *Italic*: `*text*`
- `Code`: `code`
- Paragraphs: Double line breaks
- Line breaks: Single line breaks

## Frontmatter Fields

- `title`: The post title (displayed in the email header)
- `date`: Publication date (YYYY-MM-DD format)
- `subject`: Email subject line (displayed in the email header)

That's it! Your blog will automatically load and display all posts in the `postFiles` array. 