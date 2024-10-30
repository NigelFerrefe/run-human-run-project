

class Player {
  constructor(x, y, map, tileDim) {
    this.x = x;
    this.y = y;
    this.map = map;
    this.tileDim = tileDim;
    this.el = this.createPlayerElement();
    
  }

  createPlayerElement() {
    const sprite = document.createElement("div");
    sprite.className = "player";
    sprite.style.left = this.x * this.tileDim + "px";
    sprite.style.top = this.y * this.tileDim + "px";
    sprite.style.width = sprite.style.height = this.tileDim + "px";
    sprite.style.borderRadius = this.tileDim + "px";
    return sprite;
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



  getEdges() {
    return {
      left: this.x * this.tileDim,
      right: (this.x * this.tileDim) + this.tileDim,
      top: this.y * this.tileDim,
      bottom: (this.y * this.tileDim) + this.tileDim
    };
  }

}

class Prisoner {
  constructor(x, y, map, tileDim) {
    this.x = x;
    this.y = y;
    this.map = map;
    this.tileDim = tileDim;
    this.el = this.createPrisonerElement();
  }

  createPrisonerElement() {
    const sprite = document.createElement("div");
    sprite.className = "prisoner";
    sprite.style.left = this.x * this.tileDim + "px";
    sprite.style.top = this.y * this.tileDim + "px";
    sprite.style.width = sprite.style.height = this.tileDim + "px";
    sprite.style.borderRadius = this.tileDim + "px";
    return sprite;
  }
  catch() {
    
    this.el.remove()
    console.log('Removed prisoner from map: ', this.el);
    
  }
  getEdges() {
    return {
      left: this.x * this.tileDim,
      right: (this.x * this.tileDim) + this.tileDim,
      top: this.y * this.tileDim,
      bottom: (this.y * this.tileDim) + this.tileDim
    };
  }

}