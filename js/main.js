document.addEventListener("DOMContentLoaded", () => {
  fetch("data/posts.json")
    .then(res => res.json())
    .then(posts => renderPosts(posts));

  fetch("data/guides.json")
    .then(res => res.json())
    .then(guides => renderGuides(guides));
});

function renderPosts(posts) {
  const container = document.getElementById("posts");
  posts.forEach(post => {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <h3>${post.title}</h3>
      <p><small>${post.date} · ${post.readTime}</small></p>
      <p>${post.summary}</p>
    `;
    container.appendChild(article);
  });
}

function renderGuides(guides) {
  const container = document.getElementById("guidesList");
  guides.forEach(guide => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${guide.title}</h3>
      <p>${guide.objective}</p>
      <p><strong>Para quién:</strong> ${guide.audience}</p>
      <p><small>Última revisión: ${guide.updated}</small></p>
    `;
    container.appendChild(div);
  });
}
