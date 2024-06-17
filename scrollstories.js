function scrollStoriesForward() {
  document.getElementById(`storiesBack`).classList.remove("d-none");
  let storiepics = document.getElementById(`storiepics`);
  let scrollAmount = storiepics.clientWidth * 0.33;
  storiepics.scrollLeft += scrollAmount;
}
function scrollStoriesBackward() {
  let storiepics = document.getElementById(`storiepics`);
  let scrollAmount = storiepics.clientWidth * 0.33;
  storiepics.scrollLeft -= scrollAmount;
  if (storiepics.scrollLeft <= 0) {
    document.getElementById(`storiesBack`).classList.add("d-none");
  }
}