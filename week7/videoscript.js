const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);
function playVideo() {
  myVideo.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(playButton);

pauseButton.addEventListener("click", pauseVideo);
function pauseVideo() {
  myVideo.pause();
}
