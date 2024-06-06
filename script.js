function showPosts() {
  let post = document.getElementById(`post`);
  post.innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    const posts = content[i];
    post.innerHTML += contentHTML(i, posts);
    editComment(i);
  }
}

function editComment(i) {
  let comment = document.getElementById(`comments${i}`);
  comment.innerHTML = "";
  const dialog = content[i];
  for (let j = 0; j < dialog["comments"].length; j++) {
    const mycomment = dialog["comments"][j];
    const username = dialog["user"][j];
    comment.innerHTML += /* html */ `<div><b>${username}:</b> ${mycomment}</div>`;
  }
}

function addComment(i) {
  let myuser = "philipplötzsch";
  let input = document.getElementById(`inputComment${i}`);
  content[i]["user"].push(myuser);
  content[i]["comments"].push(input.value);
  editComment(i);
  input.value = "";
}
