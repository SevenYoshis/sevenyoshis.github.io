// Simple Markdown Parser for Blog Posts
class MarkdownParser {
  constructor() {
    this.posts = [];
  }

  // Parse frontmatter and content from markdown
  parseMarkdown(markdown) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);
    
    if (match) {
      const frontmatter = this.parseFrontmatter(match[1]);
      const content = this.parseContent(match[2]);
      return { ...frontmatter, content };
    } else {
      // No frontmatter, treat entire content as body
      return {
        title: 'Untitled',
        date: new Date().toISOString().split('T')[0],
        subject: 'No Subject',
        content: this.parseContent(markdown)
      };
    }
  }

  // Parse frontmatter YAML
  parseFrontmatter(frontmatter) {
    const lines = frontmatter.split('\n');
    const metadata = {};
    
    lines.forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
        metadata[key] = value;
      }
    });
    
    return metadata;
  }

  // Parse markdown content to HTML
  parseContent(content) {
    let html = content;
    
    // Convert paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    
    // Convert single line breaks to <br>
    html = html.replace(/\n/g, '<br>');
    
    // Convert **bold** to <strong>
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert *italic* to <em>
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert `code` to <code>
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    return html;
  }

  // Load all posts from the posts directory
  async loadPosts() {
    // Since we can't fetch files directly, we'll embed the posts in JavaScript
    return ['spaghetti-incident', 'coffee-shop'];
  }

  // Load a single post
  loadPost(postId) {
    return BLOG_POSTS[postId] || null;
  }

  // Generate HTML for a post
  generatePostHTML(post, id) {
    const date = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `
      <article class="animate-box">
        <div class="blog-post" id="post-${id}">
          <div class="email-header">
            <span class="from">From: savan</span>
            <span class="to">To: you</span>
            <span class="bcc">BCC: everyone else</span>
            <span class="subject">Subject: ${post.subject}</span>
          </div>
          <h3>${post.title}</h3>
          <p class="date">${date}</p>
          <div class="post-summary">
            <p>${this.getSummary(post.content)}</p>
            <p class="read-more" onclick="togglePost(this.closest('.blog-post'))">Click to read more →</p>
          </div>
          <div class="post-full" style="display: none;">
            ${post.content}
          </div>
        </div>
      </article>
    `;
  }

  // Get summary (first paragraph)
  getSummary(content) {
    const firstParagraph = content.match(/<p>(.*?)<\/p>/);
    if (firstParagraph) {
      let summary = firstParagraph[1];
      if (summary.length > 150) {
        summary = summary.substring(0, 150) + '...';
      }
      return summary;
    }
    return content.substring(0, 150) + '...';
  }
} 