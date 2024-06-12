function showPosts() {
  let post = document.getElementById(`post`);
  post.innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    const posts = content[i];
    post.innerHTML += contentHTML(i, posts);
    if (posts["linksurl"] == "") {
      document.getElementById(`hashtags${i}`).classList.add("d-none");
    }
    editComment(i);
    showLikes(i);
    showLinks(i)
  }
}

function showLinks(i){
  let links = document.getElementById(`hashtags${i}`);
  links.innerHTML = "";
  const hashtags = content[i];
  for (let j = 0; j < hashtags["linksurl"].length; j++) {
    const url = hashtags["linksurl"][j];
    const hashtag = hashtags["link"][j];
    links.innerHTML += /* html */ `<a  href="${url}">#${hashtag} </a>`;
  }
}

