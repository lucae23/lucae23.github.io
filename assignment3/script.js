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

const resetButton = document.querySelector("#reset");
console.log(resetButton);

function resetGame() {
  location.reload();
}

resetButton.addEventListener("click", function () {
  resetGame();
});

let isPlaying = false;
let loopTimeoutId = null;

function playSoundFromLabels() {
  const labels = document.querySelectorAll(".beats");
  var delay = 100;
  const loopDelay = delay * labels.length;

  if (!isPlaying) {
    document.querySelector("#play").innerHTML = "Pause";
    isPlaying = true;

    function playSequence() {
      labels.forEach((label, index) => {
        const soundName = label.textContent.trim().toLowerCase();

        setTimeout(() => {
          playSound(soundName);
        }, index * delay);
      });

      // Save the timeout ID so we can cancel it later
      loopTimeoutId = setTimeout(playSequence, loopDelay);
    }

    playSequence();
  } else {
    document.querySelector("#play").innerHTML = "Play";
    isPlaying = false;

    if (loopTimeoutId) {
      clearTimeout(loopTimeoutId);
      loopTimeoutId = null;
    }
  }
}

function playSound(text) {
  let audio;

  if (text === "kick") {
    audio = new Audio();
    audio.src = "kick.wav";
  } else if (text === "snare") {
    audio = new Audio();
    audio.src = "snare.wav";
  } else if (text === "hi-hat") {
    audio = new Audio();
    audio.src = "hihat.wav";
  } else if (text === "tom") {
    audio = new Audio();
    audio.src = "tom.wav";
  } else {
    console.log("No matching sound for:", text);
    return;
  }

  audio.play();
}

const playButton = document.querySelector("play");
console.log(playButton);

playButton.addEventListener("click", togglePlay);

function togglePlay() {}
