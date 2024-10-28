class Game {
  constructor() {
    this.isGameOver = false;
    this.gameArea = document.querySelector("#game-area");
    this.width = this.gameArea.getBoundingClientRect().width;
    this.height = this.gameArea.getBoundingClientRect().height;
  }
}




const duration = 65;
let remainingTime = duration;
let timer = null;

const toastMessage = document.querySelector("#toast-message");

const startRound = document.querySelector("#instructions-button");
startRound.addEventListener("click", () => {
  startCountdown();
});

function startCountdown() {
  timer = setInterval(() => {
    startRound.disabled = true;
    remainingTime--;
    const timerElement = document.querySelector("#time");
    timerElement.innerText = remainingTime;
    
    if (remainingTime === 60) {
      console.log(remainingTime);
      showToast(`You have ${remainingTime} seconds to find the prisoner`);
    } else if (remainingTime === 30) {
      console.log(remainingTime);
      showToast(`${remainingTime} secs left, boss will fire me`);
    } else if (remainingTime <= 5) {
      console.log(remainingTime);
      clearInterval(timer);
      showToast(`Omg ${remainingTime} secs, my wife will kill me if I lose another job`);
      startRound.disabled = false;
    }
  }, 1000);
  console.log(remainingTime);
}

function showToast(message) {
  const toastMessageElement = document.querySelector("#toast");
  toastMessageElement.classList.add("show");
  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", () => {
    toastMessageElement.classList.remove("show");
  });

  toastMessage.innerText = message;

  setTimeout(() => {
    toastMessageElement.classList.remove("show");
  }, 3000);
}




const gameButton = document.querySelector(".game-button");
const instructions = document.querySelector("#instructions");
gameButton.addEventListener("click", () => {
  instructions.classList.toggle("not-visible");
});

let game = new Game();
