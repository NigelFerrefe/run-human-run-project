const winMessage = document.querySelector(".game-win");
const loseMessage = document.querySelector(".game-over");
const restartButtonElement = document.querySelector("#restart-game");
const nextRound = document.querySelector("#next-round");
const messageContainer = document.querySelector("#message-container");
const screenGameSound = document.querySelector("#screen-sound");
const gameSound = document.querySelector("#game-sound");
const winGameSound = document.querySelector("#prisoner-caugth");
const loseGameSound = document.querySelector("#time-over");
let soundPlayed = false;

document.addEventListener(
  "click",
  () => {
    screenGameSound.play();
  },
  { once: true }
);

function catchPrisoner(player, prisoner) {
  const playerEdges = player.getEdges();
  const prisonerEdges = prisoner.getEdges();

  if (
    playerEdges.left < prisonerEdges.right &&
    playerEdges.right > prisonerEdges.left &&
    playerEdges.top < prisonerEdges.bottom &&
    playerEdges.bottom > prisonerEdges.top
  ) {
    console.log("Collision detected!");
    prisoner.catch();

    return true;
  }
  return false;
}

function winCondition(player, prisoner) {
  if (catchPrisoner(player, prisoner)) {
    console.log("Amazing, you catch the prisoner on time");
    gameSound.pause();

    if (!soundPlayed) {
      winGameSound.play();
      soundPlayed = true;
    }
    clearInterval(game.timer);
    winMessage.style.display = "flex";
    console.log("The time has stopped");
    winMessage.style.zIndex = "3";
    winMessage.style.backgroundColor = "black";
  }
}

function gameOver() {
  if (game.isGameOver) {
    console.log("Times up!");
    gameSound.pause();
    gameSound.currentTime = 0;
    if (!soundPlayed) {
      loseGameSound.play();

      soundPlayed = true;
    }
    clearInterval(game.timer);
    loseMessage.style.display = "flex";
    loseMessage.style.zIndex = "3";
    loseMessage.style.backgroundColor = "black";
  }
}

restartButtonElement.addEventListener("click", () => {
  // window.location.reload()
  console.log("U restarted the game");
  restartGame();
});

function restartGame() {
  console.log("You restarted the game");

  // Clear the game area or specific elements
  const playerLayer = document.querySelector("#sprites");
  playerLayer.innerHTML = ""; // This removes all children of the sprite layer

  // Reset necessary game state variables
  game.isGameOver = false;
  soundPlayed = false;
  gameSound.play();
  winMessage.style.display = "none";
  loseMessage.style.display = "none";

  game = new Game();
  game.startCountdown();
  init();
}

function init() {
  const level = levels[0];
  const mapGen = new MapGenerator("game-area", level);
  mapGen.generateMap();
  mapGen.sizeUp();

  const player = new Player(
    level.player.x,
    level.player.y,
    level.map,
    mapGen.tileDim
  );
  const playerLayer = mapGen.el.querySelector("#sprites");
  playerLayer.appendChild(player.el);

  const prisoner = new Prisoner(
    level.prisoner.x,
    level.prisoner.y,
    level.map,
    mapGen.tileDim
  );
  const prisonerLayer = mapGen.el.querySelector("#sprites");
  prisonerLayer.appendChild(prisoner.el);

  addMovementControls(player);

  const gameLoop = setInterval(() => {
    if (!game.isGameOver) {
      winCondition(player, prisoner);
    } else {
      clearInterval(gameLoop);
      gameOver();
    }
  }, 1000);
}

init();

nextRound.addEventListener("click", () => {
  messageContainer.innerHTML = `
  <p>THANKS FOR PLAYING THIS BETA</p>
  <p>MORE LEVELS AND FEATURES WILL BE LOADED ASAP</p>
            <img
            src="./assets/Instructions.png"
            alt="minotaur-instructions"
            id="instructions-img"
          />
  <p>Made by: Nigel Ferreres</p>
  `;
  messageContainer.classList.add("show");
  screenGameSound.play();
  setInterval(() => alert("Close or reload screen to exit"), 5000);
});

function addMovementControls(player) {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        player.move(0, -1);
        break;
      case "s":
        player.move(0, 1);
        break;
      case "a":
        player.move(-1, 0);
        break;
      case "d":
        player.move(1, 0);
        break;
    }
    console.log("You are moving");
  });
}
