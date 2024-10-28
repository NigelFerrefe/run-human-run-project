let levels = [];

levels[0] = {
  map: [
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, ],
     // Max 56 columns
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  ], // max 26 rows
  player: {
    x: 16,
    y: 18,
  },
  prisoner: {
    x: 19,
    y: 19,
  },
  theme: "default",
};

class MapGenerator {
  constructor(id, level) {
    this.el = document.getElementById(id);
    this.tileTypes = ["floor", "wall"];
    this.tileDim = this.calculateTileDim(level.map[0].length);
    this.map = level.map;
    this.theme = level.theme;
    /*this.player = level.player;
    this.prisoner = level.prisoner;
    this.player.el = null;*/
  }

  generateMap() {
    // Create the class for the game container element to include the theme
    this.el.className = "game-container " + this.theme;
    let tiles = document.getElementById("tiles");

    // Iterate over each row (y) in the map
    this.map.forEach((row, y) => {
      // Iterate over each column (x) in the current row
      row.forEach((columns, x) => {
        // Determine the type of tile based on the tile code
        let tileType = this.tileTypes[columns];
        // Create a tile element at position (x, y) with the specified type
        let tile = this.createEl(x, y, tileType);
        // Append the newly created tile to the tiles container
        tiles.appendChild(tile);
      });
    });
  }

  createEl(x, y, type) {
    // Create a new <div> element which will act as a single tile in the map
    let el = document.createElement("div");

    // Assign a class to the tile element based on its type
    el.className = type;
    el.style.width = el.style.height = this.tileDim + "px";
    el.style.left = x * this.tileDim + "px";
    el.style.top = y * this.tileDim + "px";
    return el;
  }

  sizeUp() {
    //Display the game map according the numbers of columns and rows
    let map = this.el.querySelector(".maze-map");
    if (map) {
      // Make sure the element exists before setting its size
      map.style.height = this.map.length * this.tileDim + "px";
      map.style.width = this.map[0].length * this.tileDim + "px";
    }
  }
  calculateTileDim(columns) {
    //responsive layout for the map
    const gameAreaElement = document.querySelector(".maze-map");
    const screenWidth =
      gameAreaElement.offsetWidth ||
      gameAreaElement.getBoundingClientRect().width;
    const minTileSize = 24; // minimum size to ensure tiles are visible
    return Math.max(minTileSize, Math.floor(screenWidth / columns));
  }


}




/*placeSprite(type) {
    let x = this[type].x;
    let y = this[type].y;
    let sprite = this.createEl(x, y, type);
    sprite.id = type;
    sprite.style.borderRadius = this.tileDim + "px";
    let layer = this.el.querySelector("#sprites");
    layer.appendChild(sprite);
    return sprite;
    
    
  }*/


