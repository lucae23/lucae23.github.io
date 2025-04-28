const relaxAudio = document.querySelector("#relax-audio");
console.log(relaxAudio);

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleAudio);

function toggleAudio() {
  if (relaxAudio.paused || relaxAudio.ended) {
    relaxAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    document.querySelector("#msg").innerHTML = "You have been studying for";
  } else {
    relaxAudio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    document.querySelector("#msg").innerHTML = "You have been relaxing for";
  }
}

// playPauseButton.addEventListener("click", toggleTimer);

// function toggleTimer() {

//  }
// Add other functionalities here

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
