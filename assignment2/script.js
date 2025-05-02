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

var a = 1;
function changeAudio() {
  var audio = document.getElementById("relax-audio");
  if (a == 1) {
    audio.src = "song1.mp3";
    a = 2;
    document.querySelector("#change-button").innerHTML = "Song 1";
  } else {
    audio.src = "song2.mp3";
    a = 1;
    document.querySelector("#change-button").innerHTML = "Song 2";
  }
  document.querySelector("audio").load();
}

changeAudio();

relaxAudio.loop = true;
// This applys a loop to the audio, so that when the audio ends it repeats,
// allowing for music to play as long as the user wants to study

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
// This fetches the mute/unmute button

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);
// This fetches the mute and unmute images

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
// This is the function that causes clicking to mute the sound, and clicking again to unmute it

window.onload = function () {
  var minutes = 0;
  var seconds = 0;
  var countSeconds = document.querySelector("#seconds");
  var countMinutes = document.querySelector("#minutes");
  var toggleTimer = document.querySelector("#play-pause-btn");
  var Interval;

  toggleTimer.onclick = function () {
    clearInterval(Interval);
    seconds = "00";
    minutes = "00";
    countSeconds.innerHTML = seconds;
    countMinutes.innerHTML = minutes;
    Interval = setInterval(startTimer, 1000);
  };

  function startTimer() {
    seconds++;

    if (seconds <= 9) {
      countSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      countSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      countMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      countSeconds.innerHTML = "0" + 0;
    }

    if (minutes > 9) {
      countMinutes.innerHTML = minutes;
    }
  }
};

const hideButton = document.querySelector("hide-btn");
console.log(hideButton);

var a = 1;
function toggleHide() {
  if (a == 1) {
    document.getElementById("sidehead").style.visibility = "hidden";
    document.getElementById("notes").style.visibility = "hidden";
    document.getElementById("sidebar").style.backgroundColor = "#0855b1";
    a = 2;
    document.querySelector("#hide-btn").innerHTML = "Show";
  } else {
    document.getElementById("sidehead").style.visibility = "visible";
    document.getElementById("notes").style.visibility = "visible";
    document.getElementById("sidebar").style.backgroundColor = "#0a6ce2";
    a = 1;
    document.querySelector("#hide-btn").innerHTML = "Hide";
  }
}
