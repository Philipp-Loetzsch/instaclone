function showPosts() {

  let post = document.getElementById(`post`);
  post.innerHTML = "";

  for (let i = 0; i < content.length; i++) {
    const posts = content[i];
    let addition = posts.likes + posts.mylike[0]
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
      </div>
      <div>gefällt ${addition}  anderen</div>
      
    </div>`;
  }
}
