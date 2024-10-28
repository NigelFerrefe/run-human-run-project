// this file is in charge of all the game logic, event listeners, etc

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
  }
}

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
  });
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

  setInterval(() => catchPrisoner(player, prisoner), 1000);
  //catchPrisoner(player, prisoner);
}

init();

/*function gameLoop() {
  if (!game.isGameOver) {
    frames++;
    init()
    
    catchPrisoner();
  }
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);*/
