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
      <div class="postbuttons">
        <button onclick="likePost(${i})" title="like" id="likeButton${i}"><img src="./assets/img/heartempty.svg" alt="heart"></button>
        <button title="Zeige alle Kommentare"><img src="./assets/img/allcomments.png" alt="all comments"></button>
        <button title="teilen"><img src="./assets/img/share.png" alt=""></button>
      </div> 
      <p> <div style="color:white;" id="like${i}"></div> </p>
      <div class="hashtags" id="hashtags${i}"></div>
      <p><div id="comments${i}"></div> </p>
      <input type="text" id="inputComment${i}" placeholder="Kommentar" > <button onclick="addComment(${i})">OK</button>
    </div>`;
}

