const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);
function playAudio() {
  airportAudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(playButton);

pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  airportAudio.pause();
}

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);
function popAudio() {
  popSound.play();
}
