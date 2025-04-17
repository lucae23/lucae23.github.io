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

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);
// Event listener to toggle between playing and pausing video on clicking the button
playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
