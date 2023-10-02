let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false; // Suggests that the game has not yet started.
let level = 0; // Which is 0 at the beggining.

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    // Suggests that the game will start only once as earlier it was false.
    console.log("The game has started");
    started = true;
    // Now only after pressing any key only one time game will start and we would not have to press the key multiple times.

    // calling levelUp function.
    levelUp();
  }
});

function gameFlash(btn) {
  // makes white
  btn.classList.add("flash"); // To flash

  // To remove flash after 1 second (we use 1000 for 1 sec)
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function userFlash(btn) {
  // makes green
  btn.classList.add("userflash"); // For User

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

// Generating color
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`; // Here will come "LEVEL 1 " because earlier it was 0 then after incrementing it will become 1 from 0;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor); // Pushing arndom colour to gameSeq array.
  console.log(gameSeq); // Will show colour on keypress.

  //Rnadom button choose.
  gameFlash(randBtn);
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn); // properties of btn of gameFlash will be applied here .
  let userColor = btn.getAttribute("id"); // To fetch color from ID attribute in HTML.
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

// To Check the User's sequence and Game's sequence
function checkAns() {
  let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 100);
    }
  } else {
    h2.innerText = `Game Over!! Press any key to Start Again.`;
  }
  console.log("Curr Level = ", level);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// Define colors and buttons
// const colors = ["red", "yellow", "green", "purple"];
// const buttons = document.querySelectorAll(".btn");

// let gameSequence = [];
// let userSequence = [];
// let level = 0;
// let isUserTurn = false;

// const h2 = document.querySelector("h2");

// document.addEventListener("keypress", () => {
//   if (level === 0) {
//     startGame();
//   }
// });

// function startGame() {
//   level = 1;
//   gameSequence = [];
//   userSequence = [];
//   isUserTurn = false;
//   h2.innerText = `Level ${level}`;
//   generateRandomColor();
// }

// function generateRandomColor() {
//   const randomColor = colors[Math.floor(Math.random() * 4)];
//   gameSequence.push(randomColor);
//   playSequence();
// }

// function playSequence() {
//   isUserTurn = false;
//   let i = 0;
//   const interval = setInterval(() => {
//     flashButton(gameSequence[i]);
//     i++;
//     if (i >= gameSequence.length) {
//       clearInterval(interval);
//       isUserTurn = true;
//     }
//   }, 1000);
// }

// function flashButton(color) {
//   const button = document.querySelector(`.${color}`);
//   button.classList.add("flash");
//   setTimeout(() => {
//     button.classList.remove("flash");
//   }, 500);
// }

// function checkUserInput() {
//   if (userSequence.length === gameSequence.length) {
//     if (JSON.stringify(userSequence) === JSON.stringify(gameSequence)) {
//       level++;
//       userSequence = [];
//       h2.innerText = `Level ${level}`;
//       setTimeout(generateRandomColor, 1000);
//     } else {
//       gameOver();
//     }
//   }
// }

// function gameOver() {
//   h2.innerText = "Game Over! Press any key to restart.";
//   level = 0;
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (isUserTurn) {
//       const color = button.classList[1];
//       userSequence.push(color);
//       flashButton(color);
//       checkUserInput();
//     }
//   });
// });
