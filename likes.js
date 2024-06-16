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
  let chooseButton = document.getElementById(`likeButton${i}`);
  if (likeStatus["mylike"] == true) {
    chooseButton.innerHTML = `
        <img src="./assets/img/heartfull.svg" alt="heart">`;
  } else {
    chooseButton.innerHTML = /* html */ `<img src="./assets/img/heartempty.svg" alt="heart">`;
  }
  showLike.innerHTML = ` gefällt ${content[i]["likes"]} Personen`;
}
