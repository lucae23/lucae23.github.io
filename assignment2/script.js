const relaxAudio = document.querySelector("#relax-audio");
console.log(relaxAudio);

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", togglePlay);

function togglePlay() {
  if (relaxAudio.paused) {
    relaxAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    document.querySelector("#msg").innerHTML = "You have been studying for";
  } else {
    relaxAudio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    document.querySelector("#msg").innerHTML = "You have been relaxing for";
  }
}
const audio = document.querySelector("audio");
// This selects the audio, so that I can apply a loop
audio.loop = true;
// This applys a loop to the audio, so that when the audio ends it repeats,
// allowing for music to play as long as the user wants to study

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (relaxAudio.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    relaxAudio.muted = false;
  } else {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";

    relaxAudio.muted = true;
  }
}

window.onload = function () {
  var minutes = 0;
  var seconds = 0;
  var appendSeconds = document.querySelector("#seconds");
  var appendMinutes = document.querySelector("#minutes");
  var toggleTimer = document.querySelector("#play-pause-btn");
  var Interval;

  toggleTimer.onclick = function () {
    clearInterval(Interval);
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    Interval = setInterval(startTimer, 1000);
  };

  function startTimer() {
    seconds++;

    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
