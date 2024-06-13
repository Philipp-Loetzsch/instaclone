function saveLocal() {
  let contentAsText = JSON.stringify(content);
  localStorage.setItem("content", contentAsText);
}

function loadLocal() {
  let contentAsText = localStorage.getItem("content");
  if (contentAsText) {
    content = JSON.parse(contentAsText);
  }
  showPosts();
}
