class Game {
    constructor() {
      this.isGameOver = false;
      this.gameArea = document.querySelector("#game-area");
      this.width = this.gameArea.getBoundingClientRect().width;
      this.height = this.gameArea.getBoundingClientRect().height;
  
    }

  }
  
  let game = new Game();
  