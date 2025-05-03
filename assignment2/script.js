const relaxAudio = document.querySelector("#relax-audio");
console.log(relaxAudio);
// This fetches the audio that will play when the button is pressed

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);
// This fetches the play/pause button

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);
// This fetches the play and pause images that will toggle when clicked

playPauseButton.addEventListener("click", togglePlay);
// This creates an event listener that listens for when the play button is clicked

function togglePlay() {
  // This creates a function so that when the button is clicked, the song either plays or pauses
  if (relaxAudio.paused) {
    relaxAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    document.querySelector("#msg").innerHTML = "You have been studying for";
    // The above functions that occur when the button is first pressed is that the audio begins to play,
    // the icon switches to the pause button, and I had to include the inner HTML otherwise the message
    // would not retur to "You have been studying"
  } else {
    relaxAudio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    document.querySelector("#msg").innerHTML = "You have been relaxing for";
  }
}

var a = 1;
// This sets a variable of 1, as I only need two options, 1 being song 1 and 2 being song 2
// It is not a constant as the variable needs to change, therefore changing the song that is played

const changeButton = document.querySelector("#change-button");
console.log(changeButton);
// This fetches the change the song choice button

function changeAudio() {
  // This creates a function so that when the button is clicked, the song choice toggles from 1 and 2
  var audio = document.getElementById("relax-audio");
  if (a == 1) {
    audio.src = "song1.mp3";
    a = 2;
    document.querySelector("#change-button").innerHTML = "Song 1";
    // The above functions that occur when the button is first pressed is that the audio begins to play,
    // the icon switches to the pause button, and I had to include the inner HTML otherwise the message
    // would not retur to "You have been studying"
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
  // This creates a function so that when the button is clicked, the songs audio either is heard or muted
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
  // this creates a function so that when the window loads there is the ability for time passing to be recorded
  var minutes = 0;
  var seconds = 0;
  // these variables are the minutes and seconds passing and cannot be constant as they must be always changing
  var countSeconds = document.querySelector("#seconds");
  var countMinutes = document.querySelector("#minutes");
  var toggleTimer = document.querySelector("#play-pause-btn");
  // This fetches the play and pause and pause button
  var Interval;

  toggleTimer.onclick = function () {
    // this means that when the button is clicked, the timer begins. I was unable to figure out how to
    // toggle the timer to stop and start, so I improvised and changed the inner HTML so that the timer
    // looked like it was counting the study and then rest time
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
    // This allows for the seconds to keep counting even after the count reaches 9
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      countMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      countSeconds.innerHTML = "0" + 0;
      // This means that when the time reaches more than sixty seconds, the second count resets, and 1 minute is added to the total
    }

    if (minutes > 9) {
      countMinutes.innerHTML = minutes;
    }
  }
};

const hideButton = document.querySelector("hide-btn");
console.log(hideButton);
// This fetches the button to hide and reveal the sidebar. I figure this would be a helpful feature
// as many people might not need a notepad, and so the sidebar could become distracting

// var a = 1;
// I realised that earlier in my script I had already set a variable of 1, so I commented this out

function toggleHide() {
  // This creates function that hides and reveals the sidebar when the hide button is clicked
  if (a == 1) {
    document.getElementById("sidehead").style.visibility = "hidden";
    document.getElementById("notes").style.visibility = "hidden";
    document.getElementById("sidebar").style.backgroundColor = "#0855b1";
    a = 2;
    document.querySelector("#hide-btn").innerHTML = "Show";
    // I decided an easy way to hide the sidebar would be to just make the visibility hidden
  } else {
    document.getElementById("sidehead").style.visibility = "visible";
    document.getElementById("notes").style.visibility = "visible";
    document.getElementById("sidebar").style.backgroundColor = "#0a6ce2";
    // At first I made the sidebar go invisible too, but then the button dissapeared, so again a simple solution was just changing the
    // backround colour, achieving a hidden effect
    a = 1;
    document.querySelector("#hide-btn").innerHTML = "Hide";
  }
}
