let levels = [];

levels[0] = {
  map: [
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
  ],
  player: {
    x: 0,
    y: 4,
  },
  prisoner: {
    x: 4,
    y: 1,
  },
};

function Game(id) {
  this.el = document.querySelector(id);
  this.mazeMap = ["walls", "ground"];
  //the index of ground is 0, and the index of wall is 1, which is in keeping with the codes on our map.
}
