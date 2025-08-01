# How to Add New Blog Posts

## Quick Guide

1. **Open `js/posts-data.js`**
2. **Add a new entry** to the `BLOG_POSTS` object:

```javascript
'my-new-post': {
  title: "My New Post Title",
  date: "2023-12-20",
  subject: "My New Post Subject",
  content: `
    <p>Your post content here...</p>
    <p>More paragraphs...</p>
  `
}
```

3. **Add the post ID** to the `postIds` array in `blog.html`:

```javascript
const postIds = ['spaghetti-incident', 'coffee-shop', 'my-new-post'];
```

## Example

To add a post about debugging:

```javascript
// In js/posts-data.js
'debugging-at-3am': {
  title: "Debugging at 3 AM: A Love Story",
  date: "2023-11-28",
  subject: "Debugging at 3 AM: A Love Story",
  content: `
    <p>There's something special about debugging at 3 AM. The world is quiet, your brain is fried, and you're convinced that the bug you're chasing is actually a ghost in the machine. Spoiler alert: it's usually just a missing semicolon.</p>
    <p>But hey, at least you get to experience that sweet, sweet dopamine rush when you finally figure it out. Even if it's 4 AM and you have work in 3 hours.</p>
  `
}
```

Then add `'debugging-at-3am'` to the `postIds` array in `blog.html`.

## Features

- **Direct linking**: `blog.html#post-my-new-post`
- **Email headers**: Automatically generated from title/subject
- **Expand/collapse**: Full functionality preserved
- **All styling**: Maintains the email inbox aesthetic

That's it! Your new post will appear in the blog automatically. 