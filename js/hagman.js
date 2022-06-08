import { drawHangman } from "./canvas.js";

const keyboard = document.querySelector("html");
const reloadBtn = document.querySelector("#reload");

const word = JSON.parse(localStorage.getItem("word"));
const words = ["historia", "perro", "persona"];
words.push(word);

let numRamd = Math.floor(Math.random() * (words.length - 1));
const ramdWord = words[numRamd].toUpperCase();

let wrong = "";
let wrongCount = 0;
let rightCount = 0;

createUnderscore();
keyboard.addEventListener("keypress", (e) => keyboardPress(e)),
  reloadBtn.addEventListener("click", () => document.location.reload(true));

function keyboardPress(e) {
  const letters = document.querySelectorAll(".letter");
  const letter = e.key.toUpperCase();
  wrongLetter(letter);
  drawHangman(wrongCount);
  victoriAnddefeatRender();
  for (let i = 0; i < ramdWord.length; i++) {
    if (ramdWord[i] === letter) {
      rightCount++;
      letters[i].innerHTML = letter;
    }
  }
}

function createUnderscore() {
  const letters = document.querySelector("#letters");
  for (let i = 0; i < ramdWord.length; i++) {
    const createSpan = document.createElement("span");
    createSpan.classList.add("letter");
    letters.appendChild(createSpan);
  }
}

function wrongLetter(letter) {
  const lettersSpan = document.querySelector("#wrong-letter");
  if (
    !ramdWord.includes(letter) &&
    letter.includes(letter) &&
    wrong.length < 6
  ) {
    wrongCount++;
    wrong += letter;
  }
  console.log(wrongCount);
  lettersSpan.innerHTML = wrong;
}

function victoriAnddefeatRender() {
  const endGame = document.querySelector("#end-game-activate");
  const status = document.querySelector("#status-end-game");
  victori(endGame, status);
  defeat(endGame, status);
}
function victori(endGame, status) {
  if (rightCount === ramdWord.length) {
    endGame.classList.add("blur--activate");
    status.style.color = "green";
    status.innerHTML = "Victoria";
  }
}
function defeat(endGame, status) {
  if (wrongCount === 6) {
    endGame.classList.add("blur--activate");
    status.style.color = "red";
    status.innerHTML = "Derrota";
  }
}
