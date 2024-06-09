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
  let like = content[i];
  if (like["mylike"] == false) {
    like["mylike"] = true;
    like["likes"] += 1;
  } else {
    like["mylike"] = false;
    like["likes"] -= 1;
  }
  showLikes(i);
  saveLocal();
}

function showLikes(i) {
  let likeStatus = content[i];
  let showLike = document.getElementById(`like${i}`);
  showLike.innerHTML = ` gefällt ${content[i]["likes"]} anderen`;
  let chooseButton = document.getElementById(`likeButton${i}`);
  if (likeStatus["mylike"] == true) {
    chooseButton.innerHTML = `
      <img src="./assets/img/heartfull.svg" alt="heart">`;
  } else {
    chooseButton.innerHTML = `<img src="./assets/img/heartempty.svg" alt="heart">`;
  }
}

