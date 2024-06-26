function contentHTML(i, posts) {
  return /* html */ `
    <div class="post">
      <div class="p-head">
        <img class="p-profilpic" src="${posts["profilpic"]}" alt="Profilbild">
          <div class="p-title">
            <h3>${posts["name"]}</h3>
            <span>${posts["location"]}</span>
            <span>${posts["date"]}</span>
          </div>
      </div> <br>
      <img class="postimage" src="${posts["image"]}" alt="Inhaltsbild">
      <div class="postbuttons">
        <button onclick="likePost(${i})" title="like" id="likeButton${i}"><img src="./assets/img/heartempty.svg" alt="heart"></button>
        <button onclick="showAllComments(${i})" title="Zeige alle Kommentare" id="showCommentsBtn${i}"><img src="./assets/img/allcomments.png" alt="all comments"></button>
        <button title="teilen"><img src="./assets/img/share.png" alt=""></button>
      </div> 
      <p> <div id="like${i}"></div> </p>
      <p class="post-description"> <b> ${posts["description"]} </b></p>
      <div class="hashtags" id="hashtags${i}"></div>
      <p> <h4 onclick="showAllComments(${i})">Kommentare <span id="commentsCount${i}" class="comments-count"></span>:</h4> <br> 
      <div id="comments${i}" class="comments d-none"></div> </p>
      <form id="addComment" onsubmit="addComment(${i}); return false">
      <input type="text" id="inputComment${i}" class="input-comment" placeholder="Hier Kommentar eingeben" required> <button type="submit" class="btn-post">posten</button>
      </form>
    </div>`;
}