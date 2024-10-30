class Game {
  constructor() {
    this.isGameOver = false;
    this.gameArea = document.querySelector("#game-area");
    this.gameStart = document.querySelector(".game-start");
    this.gameButton = document.querySelector(".game-button");
    this.instructions = document.querySelector("#instructions");
    this.duration = 75;
    this.remainingTime = this.duration;
    this.timer = null;
    this.toastMessage = document.querySelector("#toast-message");
    this.startRound = document.querySelector("#instructions-button");
    this.screenGameSound = document.querySelector("#screen-sound");
    this.initGame();
  }

  initGame() {
    this.gameButton.addEventListener("click", () => {
      this.instructions.classList.toggle("not-visible");
    });

    this.startRound.addEventListener("click", () => {
      this.startCountdown();
      this.gameStart.style.display = "none";
      gameSound.play()
      this.screenGameSound.pause();
      this.screenGameSound.currentTime = 0;
    });
  }

  startCountdown() {
    this.timer = setInterval(() => {
      this.startRound.disabled = true;
      this.remainingTime--;
      const timerElement = document.querySelector("#time");
      timerElement.innerText = this.remainingTime;

      if (this.remainingTime === 60) {
        this.showToast(
          `You have ${this.remainingTime} seconds to find the prisoner`
        );
      } else if (this.remainingTime === 30) {
        this.showToast(`${this.remainingTime} secs left, boss will fire me`);
      } else if (this.remainingTime < 5) {
        this.showToast(
          `Omg ${this.remainingTime} secs, my wife will kill me if I lose another job`
        );

        //this.startRound.disabled = false;
      }
      if (this.remainingTime <= 0) {
        game.isGameOver = true;
        console.log(game.isGameOver);
        clearInterval(this.timer);
      }
      console.log(this.remainingTime);
    }, 1000);
  }

  showToast(message) {
    const toastMessageElement = document.querySelector("#toast");
    toastMessageElement.classList.add("show");
    this.toastMessage.innerText = message;
    setTimeout(() => {
      toastMessageElement.classList.remove("show");
    }, 3000);
  }
}

let game = new Game();

