function showPosts() {
  let post = document.getElementById(`post`);
  post.innerHTML = "";

  for (let i = 0; i < content.length; i++) {
    const posts = content[i];
    let addition = posts.likes + posts.mylike[0];
    post.innerHTML += /* html */ `
    <div class="post">
      <div class="p-head">
        <img class="p-profilpic" src="${posts["profilpic"]}" alt="Profilbild">
          <div class="p-title">
            <h3>${posts["name"]}</h3>
            <span>${posts["location"]}</span>
          </div>
      </div>
      <img src="${posts["image"]}" alt="Inhaltsbild">
      <div>
        <button>like</button>
        <button>allcomments</button>
        <button>share</button>
      </div> <br>
      <div style="color:white;">gefällt ${addition}  anderen</div>
      <div id="comments${i}"></div>
    </div>`;
    let comment = document.getElementById(`comments${i}`);
    for (let j = 0; j < posts["comments"].length; j++) {
      const mycomment = posts["comments"][j];
      const username = posts["user"][j];
      comment.innerHTML += /* html */ `
      <div>${username}</div>
      <div>${mycomment}</div>`;
    }
  }
}
