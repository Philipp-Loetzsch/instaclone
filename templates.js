function contentHTML(i, posts) {
  return /* html */ `
    <div class="post">
      <div class="p-head">
        <img class="p-profilpic" src="${posts["profilpic"]}" alt="Profilbild">
          <div class="p-title">
            <h3>${posts["name"]}</h3>
            <span>${posts["location"]}</span>
          </div>
      </div> <br>
      <img class="postimage" src="${posts["image"]}" alt="Inhaltsbild">
      <div>
        <button onclick="likePost(${i})">like</button>
        <button>allcomments</button>
        <button>share</button>
      </div> 
      <p> <div style="color:white;" id="like${i}"></div> </p>
      <div><a class="hashtags" id="hashtags${i}" href="${posts["linksurl"]}">#${posts["link"]}</a></div>
      <p><div id="comments${i}"></div> </p>
      <input type="text" id="inputComment${i}" placeholder="Kommentar" > <button onclick="addComment(${i})">OK</button>
    </div>`;
}
