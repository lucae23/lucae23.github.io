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
    // This fetches the background colour and text content of the selected drum, so that these properties can then be dropped onto a
    // beat, giving it the drums properties
    event.target.style.backgroundColor = color;
    event.target.textContent = draggedElement.textContent;
    // I have to add event.target, as I am wanting this function to affect all the beats, and just writing beats would only affect the
    // first one
    draggedElement = null;
  }
}

beats.forEach((beats) => {
  beats.addEventListener("click", clearBeat);
});
// This listens for when any beat is clicked on

function clearBeat() {
  event.target.textContent = "";
  event.target.style.backgroundColor = "gray";
  // This makes it so when a beat is clicked, there text content and colour revert back to the state it was before. I added this feature
  // because sometimes I didn't want to reset the whole bar but just one beat, and it was such a simple addition
}

const resetButton = document.querySelector("#reset");
console.log(resetButton);

resetButton.addEventListener("click", function () {
  resetGame();
});
// This listens for when the refresh button is clicked, and if so enacts a function

function resetGame() {
  location.reload();
  // This is an extremly simple way to clear all the beats at once, it just refreshes the page, I thought this feature would be useful if
  // users where getting overwhelmed with the amount of beats playing
}

var delay = 300;
// This variable is the delay in between when each audio is played. I needed to add a delay, as otherwise, all the audio files would
// play at the exact same time. I have made it a variable as I want to be able to change the length of the delay, therefore speeding up
// or slowing down the 'tempo' of the drums.
var a = 0;
// This variable is what causes my toggle buttons to work, as when the buttons are clicked, the variable is changed by 1, and each number
// has its own function

const speedButton = document.querySelector("#speed");
console.log(speedButton);

speedButton.addEventListener("click", toggleSpeed);

function toggleSpeed() {
  a = (a % 5) + 1;
  if (a === 1) {
    delay = 200;
    a = 1;
    document.querySelector("#speed").innerHTML = "[] [] [] []";

    // This detects if the button is pressed once, and if so, the delay variable is changed to a different number, therefore changing the
    // time in between beats, replicating a tempo adjustment. I thought this was an absolutly essential feature as people playing to the
    // track would want to experiment with playing at different speeds, for example if they want to see how fast a song sounds best at.
    // The following lines of code do the same function but to different degrees
  } else if (a === 2) {
    delay = 100;
    a = 2;
    document.querySelector("#speed").innerHTML = "[] [] [] [] []";
  } else if (a === 3) {
    delay = 500;
    a = 3;
    document.querySelector("#speed").innerHTML = "[]";
  } else if (a === 4) {
    delay = 400;
    a = 4;
    document.querySelector("#speed").innerHTML = "[] []";
  } else {
    delay = 300;
    a = 5;
    document.querySelector("#speed").innerHTML = "[] [] []";
  }
}

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

let isPlaying = false;
let loopTimeoutId = null;

function playSoundFromLabels() {
  const allBeats = document.querySelectorAll(".beats");
  // This selects all the different beats, that are in the class of 'beats'
  let visibleBeats = [];
  // When I originally added the ability to add and remove more bars of beats, the code would treat these beats as if they were there and
  // a pause in the beat would occur. My solution for this was to make it so only beats that were visible would be played

  for (let i = 0; i < allBeats.length; i++) {
    const beat = allBeats[i];
    const display = window.getComputedStyle(beat).display;

    if (display !== "none") {
      visibleBeats.push(beat);
    }
  }

  const loopDelay = delay * visibleBeats.length;
  // I knew that the drums needed to loop, otherwise an essential feature of the webpage (being able to play along), would not work

  if (!isPlaying) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    // This changes the image source to a pause icon, so it is clear when the toggle is either playing or paused.
    isPlaying = true;

    function playSequence() {
      for (let i = 0; i < visibleBeats.length; i++) {
        const beat = visibleBeats[i];
        const soundName = beat.textContent.trim().toLowerCase();
        // This begins playing the sequence, only playing the drum sounds of A. beats with text content, and B. visible beats

        setTimeout(() => {
          playSound(soundName);
        }, i * delay);
      }

      loopTimeoutId = setTimeout(playSequence, loopDelay);
    }

    playSequence();
    // When the drums were playing, the speed button and slider both would create problems when used, so I decided an easy fix would just
    // be to disable them when the sequence was playing, so I attached the bottom lines of code inside the function for convenience
    speedButton.disabled = true;
    beatSlider.disabled = true;
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    isPlaying = false;
    speedButton.disabled = false;
    beatSlider.disabled = false;
    // This ensures this button acts as a toggle, as two different buttons for play and pause uses too much space and doesn't look as simple

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

// These lines fetch all the audio clips for the corresponding drum part

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
    // The above lines are affected by the text content in the beats. Depending on the text content, the above lines determine what audio
    // should be played. At first I thought I would have to drag and drop the audio src, but then I realised that I just needed to drag
    // drop the text content, and then 'read' the text content to determine the audio to play
  }
  audio.currentTime = 0;
  audio.play();
}

const powerButton = document.querySelector("#power");
console.log(powerButton);

const powerImg = document.querySelector("#power-img");
console.log(powerImg);

powerButton.addEventListener("click", togglePower);
// This listens for when the power button is clicked, and if so enacts the toggle power function

var b = 1;

function togglePower() {
  var audio = document.getElementById("snare");
  // This creates a variable for the snare audio, meaning I can now alter the audio source, so that the snare can change sounds,
  // I wanted to do this to create different 'vibes' for the drums, as musicians who are playing along to the drums might want to
  // experiment with playing more 'soft' or more 'heavy'
  if (b == 1) {
    audio.src = "snare3.mp3";
    b = 2;
    powerImg.src = "power1.png";
  } else if (b == 2) {
    audio.src = "snare2.mp3";
    b = 3;
    powerImg.src = "power3.png";
  } else {
    audio.src = "snare.mp3";
    b = 1;
    powerImg.src = "power2.png";
  }
}

const beatSlider = document.querySelector(".slider");
console.log(beatSlider);

beatSlider.addEventListener("input", toggleBeats);

function toggleBeats() {
  const sliderValue = parseInt(this.value, 10);
  // this detects the value of the slider, and based on that value, the number of beats will change

  console.log(sliderValue);
  if (sliderValue > 3) {
    showBeats(5, 16);
    // If the slider value is greater than 3, all beats will be shown. I had to make the highest value of the slider first
    // in the if chain, so that this is checked first and the code runs efficiently
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
    // This creates a function that makes a beat display.block, meaning it is visible and functional on the webpage
    // originally I had all the beat listened out on the toggleBeats function, but I researched and found you could make function for hiding
    // showing, and then just having a start and end value that it applies to
  }
}

function hideBeats(start, end) {
  for (let i = start; i <= end; i++) {
    const beat = document.querySelector(`#beat${i}`);
    if (beat) beat.style.display = "none";
    // This creates a function that makes a beat display.none, meaning it is not visible and functional on the webpage
  }
}
