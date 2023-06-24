function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function resetGame() {
  // Clear the content of each dropbox on the board
  const dropboxes = document.getElementsByClassName("dropbox");
  for (let i = 0; i < dropboxes.length; i++) {
    dropboxes[i].innerHTML = "";
  }

  // Move the cross and circle elements back to the drag container
  const dragContainer = document.querySelector(".drag");
  const dragElements = document.querySelectorAll(".dragbox");
  dragElements.forEach((element) => {
    dragContainer.appendChild(element);
  });
}

// Get the reset button element
const resetButton = document.querySelector(".reset");

// Attach the click event listener to the reset button
resetButton.addEventListener("click", resetGame);
