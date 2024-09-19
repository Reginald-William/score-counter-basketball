let homeScore = document.getElementById("home-counter");
let guestScore = document.getElementById("guest-counter");
let resetBtn = document.getElementById("btn-reset");

function add1Home() {
  homeScore.textContent = Number(homeScore.textContent) + 1;
}

function add2Home() {
  homeScore.textContent = Number(homeScore.textContent) + 2;
}

function add3Home() {
  homeScore.textContent = Number(homeScore.textContent) + 3;
}

function add1Guest() {
  guestScore.textContent = Number(guestScore.textContent) + 1;
}

function add2Guest() {
  guestScore.textContent = Number(guestScore.textContent) + 2;
}

function add3Guest() {
  guestScore.textContent = Number(guestScore.textContent) + 3;
}

function scoreReset() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
