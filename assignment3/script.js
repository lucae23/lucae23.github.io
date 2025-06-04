let draggedElement = null;

const drums = document.querySelectorAll(".drums");
// This selects all elements in the class of drums, as a simple querySelector would only select the first element
drums.forEach((drums) => {
  // This means that the following event listener will be for all elements in the class of drums
  drums.addEventListener("dragstart", startDrag);
  // This listens for when the element is selcted and begins to be dragged
});

const beats = document.querySelectorAll(".beats");
// This selects all elements in the class of beats, as a simple querySelector would only select the first element
beats.forEach((beats) => {
  // This means that the following event listener will be for all elements in the class of beats
  beats.addEventListener("dragover", endDrag);
  beats.addEventListener("drop", handleDrop);
  // The above event listeners listen for when the element is held over the drop zone and when it is dropped
});

function startDrag(event) {
  draggedElement = event.target;
}

function endDrag(event) {
  event.preventDefault();
}

function handleDrop() {
  if (draggedElement) {
    const color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    // const color = draggedElement.style.backgroundColor;
    event.target.style.backgroundColor = color;
    event.target.textContent = draggedElement.textContent;
    draggedElement = null;
  }
}

beats.forEach((beats) => {
  beats.addEventListener("click", clearBeat);
});

function clearBeat() {
  event.target.textContent = "";
  event.target.style.backgroundColor = "gray";
}

const resetButton = document.querySelector("#reset");
console.log(resetButton);

function resetGame() {
  location.reload();
}

resetButton.addEventListener("click", function () {
  resetGame();
});

var delay = 500;
var a = 1;

const speedButton = document.querySelector("#speed");
console.log(speedButton);

speedButton.addEventListener("click", toggleSpeed);

function toggleSpeed() {
  if (a == 1) {
    delay = 400;
    a = 2;
    document.querySelector("#speed").innerHTML = "Level 2";
  } else if (a == 2) {
    delay = 300;
    a = 3;
    document.querySelector("#speed").innerHTML = "Level 3";
  } else if (a == 3) {
    delay = 200;
    a = 4;
    document.querySelector("#speed").innerHTML = "Level 4";
  } else if (a == 4) {
    delay = 100;
    a = 5;
    document.querySelector("#speed").innerHTML = "Level 5";
  } else {
    delay = 500;
    a = 1;
    document.querySelector("#speed").innerHTML = "Level 1";
  }
}

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

let isPlaying = false;
let loopTimeoutId = null;

function playSoundFromLabels() {
  const allBeats = document.querySelectorAll(".beats");
  let visibleBeats = [];

  // First: Count and collect visible beats using getComputedStyle
  for (let i = 0; i < allBeats.length; i++) {
    const beat = allBeats[i];
    const display = window.getComputedStyle(beat).display;

    if (display !== "none") {
      visibleBeats.push(beat);
    }
  }

  const loopDelay = delay * visibleBeats.length;

  if (!isPlaying) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    isPlaying = true;

    function playSequence() {
      for (let i = 0; i < visibleBeats.length; i++) {
        const beat = visibleBeats[i];
        const soundName = beat.textContent.trim().toLowerCase();

        setTimeout(() => {
          playSound(soundName);
        }, i * delay);
      }

      loopTimeoutId = setTimeout(playSequence, loopDelay);
    }

    playSequence();
    speedButton.disabled = true;
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    isPlaying = false;
    speedButton.disabled = false;

    if (loopTimeoutId) {
      clearTimeout(loopTimeoutId);
      loopTimeoutId = null;
    }
  }
}

const snareAudio = document.querySelector("#snare");
console.log(snareAudio);

const kickAudio = document.querySelector("#kick");
console.log(kickAudio);

const hihatAudio = document.querySelector("#hihat");
console.log(hihatAudio);

const tomAudio = document.querySelector("#tom");
console.log(tomAudio);

function playSound(text) {
  let audio;

  if (text === "kick") {
    audio = kickAudio;
  } else if (text === "snare") {
    audio = snareAudio;
  } else if (text === "hi-hat") {
    audio = hihatAudio;
  } else if (text === "tom") {
    audio = tomAudio;
  } else {
    console.log("No matching sound for:", text);
    return;
  }
  audio.currentTime = 0;
  audio.play();
}

const powerButton = document.querySelector("#power");
console.log(powerButton);

const powerImg = document.querySelector("#power-img");
console.log(powerImg);

powerButton.addEventListener("click", togglePower);

function togglePower() {
  var audio = document.getElementById("snare");
  if (a == 1) {
    audio.src = "snare3.mp3";
    a = 2;
    powerImg.src = "power1.png";
  } else if (a == 2) {
    audio.src = "snare2.mp3";
    a = 3;
    powerImg.src = "power3.png";
  } else {
    audio.src = "snare.mp3";
    a = 1;
    powerImg.src = "power2.png";
  }
}

const beat1 = document.getElementById("beat1");
const beat2 = document.getElementById("beat2");
const beat3 = document.getElementById("beat3");
const beat4 = document.getElementById("beat4");
const beat5 = document.getElementById("beat5");
const beat6 = document.getElementById("beat6");
const beat7 = document.getElementById("beat7");
const beat8 = document.getElementById("beat8");
const beat9 = document.getElementById("beat9");
const beat10 = document.getElementById("beat10");
const beat11 = document.getElementById("beat11");
const beat12 = document.getElementById("beat12");

const beatSlider = document.querySelector(".slider");
console.log(beatSlider);

beatSlider.addEventListener("input", toggleBeats);

function toggleBeats() {
  const sliderValue = parseInt(this.value, 10);

  console.log(sliderValue);
  if (sliderValue > 3) {
    showBeats(5, 16);
  } else if (sliderValue > 2) {
    showBeats(5, 12);
    hideBeats(13, 16);
  } else if (sliderValue > 1) {
    showBeats(5, 8);
    hideBeats(9, 16);
  } else {
    hideBeats(5, 16);
  }
}

function showBeats(start, end) {
  for (let i = start; i <= end; i++) {
    const beat = document.querySelector(`#beat${i}`);
    if (beat) beat.style.display = "block";
  }
}

function hideBeats(start, end) {
  for (let i = start; i <= end; i++) {
    const beat = document.querySelector(`#beat${i}`);
    if (beat) beat.style.display = "none";
  }
}
