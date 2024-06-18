function scrollStoriesForward() {
  document.getElementById("storiesBack").classList.remove("d-none");
  let storiepics = document.getElementById("storiepics");
  let scrollAmount = storiepics.clientWidth * 0.4;
  storiepics.scrollLeft += scrollAmount;
  if (storiepics.scrollLeft + storiepics.clientWidth >= storiepics.scrollWidth
  ) {
    document.getElementById(`storiesForward`).classList.add("invalid");
  }
}

function scrollStoriesBackward() {
  document.getElementById(`storiesForward`).classList.remove("invalid");
  let storiepics = document.getElementById("storiepics");
  let scrollAmount = storiepics.clientWidth * 0.4;
  storiepics.scrollLeft -= scrollAmount;
  if (storiepics.scrollLeft <= 0) {
    document.getElementById(`storiesBack`).classList.add("d-none");
  }
}
