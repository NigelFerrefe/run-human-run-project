class Character {
  constructor(x, y, map, tileDim) {
    this.x = x;
    this.y = y;
    this.map = map;
    this.tileDim = tileDim;
    this.el = this.createCharacterElement();
  }

  createCharacterElement() {
    const sprite = document.createElement("div");
    sprite.style.left = this.x * this.tileDim + "px";
    sprite.style.top = this.y * this.tileDim + "px";
    sprite.style.width = sprite.style.height = this.tileDim + "px";
    sprite.style.borderRadius = this.tileDim + "px";
    return sprite;
  }

  getEdges() {
    return {
      left: this.x * this.tileDim,
      right: this.x * this.tileDim + this.tileDim,
      top: this.y * this.tileDim,
      bottom: this.y * this.tileDim + this.tileDim,
    };
  }
}

class Player extends Character {
  constructor(x, y, map, tileDim) {
    super(x, y, map, tileDim);
    this.el.className = "player";
  }

  move(dx, dy) {
    const newX = this.x + dx;
    const newY = this.y + dy;

    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < this.map[0].length &&
      newY < this.map.length &&
      this.map[newY][newX] !== 1 &&
      this.map[newY][newX] !== undefined
    ) {
      this.x = newX;
      this.y = newY;
      this.el.style.left = this.x * this.tileDim + "px";
      this.el.style.top = this.y * this.tileDim + "px";
    }
  }
}

class Prisoner extends Character {
  constructor(x, y, map, tileDim) {
    super(x, y, map, tileDim);
    this.el.className = "prisoner";
  }

  catch() {
    this.el.remove();
    console.log("Removed prisoner from map: ", this.el);
  }
}
