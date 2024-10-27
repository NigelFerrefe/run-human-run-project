// this file is in charge of all the game logic, event listeners, etc

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "a":
    case "ArrowLeft":
      player.direction = "left";
      break;
    case "d":
    case "ArrowRight":
      player.direction = "right";
      break;
    case "s":
    case "ArrowDown":
      player.direction = "down";
      break;
    case "w":
    case "ArrowUp":
      player.direction = "up";
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
    case "ArrowLeft":
    case "d":
    case "ArrowRight":
    case "s":
    case "ArrowDown":
    case "w":
    case "ArrowUp":
      player.direction = null;
      break;
  }
});

function catchPrisoner() {
  const playerLeftEdge = player.left;
  const playerRightEdge = player.left + player.width;
  const playerTopEdge = player.top;
  const playerBottomEdge = player.top + player.height;

  const prisonerLeftEdge = prisoner.element.getBoundingClientRect().left;
  const prisonerRightEdge = prisonerLeftEdge + prisoner.width;
  const prisonerTopEdge = prisoner.element.getBoundingClientRect().top;
  const prisonerBottomEdge = prisonerTopEdge + prisoner.height;



  if (
    playerLeftEdge < prisonerRightEdge &&
    playerRightEdge > prisonerLeftEdge &&
    playerTopEdge < prisonerBottomEdge &&
    playerBottomEdge > prisonerTopEdge
  ) {
    console.log("Collision detected!");
    prisoner.catch();
  }
}

function gameLoop() {
  if (!game.isGameOver) {
    frames++;
    player.move();
    catchPrisoner();
  }
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
