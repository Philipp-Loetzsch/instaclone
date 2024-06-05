function contentHTML(i, posts, addition) {
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
      <div style="color:white;">gefällt ${addition}  anderen</div> <br>
      <div id="comments${i}"></div> <br>
      <input type="text" id="inputComment${i}" placeholder="Kommentar" > <button onclick="addComment(${i})">OK</button>
    </div>`;
}

function likePost(i) {
  let like = content[i];
  if (like.mylike == 0) {
    like.mylike.push(1);
   
  } else {
    like.mylike.push(0);
    
  }
}
