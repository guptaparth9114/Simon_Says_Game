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

// To Check the User's sequence and Game's sequence
function checkSeq() {
  let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("Same Value");
  } else {
    h2.innerText = `Game Over!! Press any key to Start Again.`;
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn); // properties of btn of gameFlash will be applied here .
  let userColor = btn.getAttribute("id"); // To fetch color from ID attribute in HTML.
  console.log(userColor);
  checkSeq();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
