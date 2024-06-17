function showPosts() {
  let post = document.getElementById(`post`);
  post.innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    const posts = content[i];
    post.innerHTML += contentHTML(i, posts);
    if (posts["link"] == "") {
      document.getElementById(`hashtags${i}`).classList.add("d-none");
    }
    editComment(i);
    showLikes(i);
    showLinks(i);
  }
}

function showLinks(i) {
  let links = document.getElementById(`hashtags${i}`);
  links.innerHTML = "";
  const hashtags = content[i];
  for (let j = 0; j < hashtags["link"].length; j++) {
    const url = hashtags["linksurl"][j];
    const hashtag = hashtags["link"][j];
    links.innerHTML += /* html */ `<a  href="${url}">#${hashtag} </a>`;
  }
}

function showMenu(){
  document.getElementById(`mobileNavigation`).classList.toggle("d-none")
  document.getElementById(`mobileNavigation`).classList.toggle("d-grid")
}

function closeMenu(){
  document.getElementById(`mobileNavigation`).classList.add("d-none")
  document.getElementById(`mobileNavigation`).classList.remove("d-grid")
}