function editComment(i) {
  let comment = document.getElementById(`comments${i}`);
  comment.innerHTML = "";
  let dialog = content[i];
  for (let j = 0; j < dialog["comments"].length; j++) {
    let mycomment = dialog["comments"][j];
    let username = dialog["user"][j];
    comment.innerHTML += /* html */ `<div class="comment"><b>${username}:</b> ${mycomment}</div>`;
  }
  saveLocal();
  commentsCount(i);
}

function addComment(i) {
  let myuser = "philipplötzsch";
  let input = document.getElementById(`inputComment${i}`);
  content[i]["user"].push(myuser);
  content[i]["comments"].push(input.value);
  editComment(i);
  input.value = "";
}

function commentsCount(i) {
  let count = content[i]["comments"].length;
  document.getElementById(`commentsCount${i}`).innerHTML = `(${count})`;
}

function showAllComments(i){
  let showComments= document.getElementById(`comments${i}`)
  let showCommentsBtn = document.getElementById(`showCommentsBtn${i}`);
  showComments.classList.toggle("d-none");

  if (showComments.classList.contains("d-none")) {
    showCommentsBtn.innerHTML = `
        <img src="./assets/img/allcomments.png" alt="all comments">`;
} else {
    showCommentsBtn.innerHTML = `<img src="./assets/img/showallcomments.png" alt="all comments">`;
}

}