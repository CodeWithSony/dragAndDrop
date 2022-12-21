console.log("hello world.");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listeners for the draggable element img
imgBox.addEventListener("dragstart", (e) => {
  console.log("Drag start..");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
    //  we used setTimeout 0 so it will be happen in the last
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("Drag End start..");
  e.target.className = "imgBox";
});

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Dragover...");
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("Dragnter...");
    e.target.className += " dashed";
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("Dragleave...");
    e.target.className = "whiteBox";
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("Drop...");
    e.target.append(imgBox);
  });
}
