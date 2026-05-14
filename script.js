const API_URL = 'http://localhost:5000/api/posts';

// 1. Fetch and display posts
async function loadPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();
  const grid = document.getElementById('posts-grid');
  
  grid.innerHTML = posts.map(post => `
    <article class="post-card">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>By ${post.author || 'Anonymous'}</small>
    </article>
  `).join('');
}

// 2. Submit a new post
async function submitPost() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').innerText;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });

  location.reload(); // Refresh to see the new post
}

loadPosts();