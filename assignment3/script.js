let draggedElement = null;

const drums = document.querySelectorAll(".drums");
drums.forEach((drums) => {
  drums.addEventListener("dragstart", startDrag);
});

const beats = document.querySelectorAll(".beats");
beats.forEach((beats) => {
  beats.addEventListener("dragover", endDrag);
  beats.addEventListener("drop", handleDrop);
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
