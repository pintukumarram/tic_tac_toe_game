let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes(boxes);
  msgContainer.classList.add("hide");
};

// Function for button click
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    gameDraw();
  }); // end of event listener
});

const disableBoxes = (boxes) => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = (boxes) => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// Function for winner declaration
const showWinner = (winner) => {
  msg.innerText = `Congratulations 🎉🥳🎊🎁, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes(boxes);
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
};

// Function for draw
const gameDraw = () => {
  let draw = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      draw = false;
      break;
    }
  }
  if (draw) {
    msg.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes(boxes);
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
