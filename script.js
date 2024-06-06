function showPosts() {
  let post = document.getElementById(`post`);
  post.innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    const posts = content[i];
    post.innerHTML += contentHTML(i, posts);
    editComment(i);
    likePost(i);
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
  saveLocal();
}

function addComment(i) {
  let myuser = "philipplötzsch";
  let input = document.getElementById(`inputComment${i}`);
  content[i]["user"].push(myuser);
  content[i]["comments"].push(input.value);
  editComment(i);
  input.value = "";
}

function likePost(i) {
  let showLike = document.getElementById(`like${i}`);
  let like = content[i];
  if (like["mylike"] == false) {
    like["mylike"] = true;
    like["likes"] += 1;
  }
  else{
    like["mylike"] = false;
    like["likes"] -= 1;
  }
  showLike.innerHTML= ` gefällt ${like["likes"]} anderen`
  saveLocal();
}
