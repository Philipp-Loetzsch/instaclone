function contentHTML(i, posts) {
  return /* html */ `
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
        <button onclick="likePost(${i})">like</button>
        <button>allcomments</button>
        <button>share</button>
      </div> <br>
      <div style="color:white;" id="like${i}"></div> <br>
      <div><a class="hashtags" href="${posts["linksurl"]}">#${posts["link"]}</a></div> <br>
      <div id="comments${i}"></div> <br>
      <input type="text" id="inputComment${i}" placeholder="Kommentar" > <button onclick="addComment(${i})">OK</button>
    </div>`;
    }

