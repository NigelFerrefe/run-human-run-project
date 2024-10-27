class Player {
  constructor() {
    this.element = document.querySelector("#player");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = 0;
    this.top = 0;
    this.speed = 5;
    this.direction = null;
  }
  
  move() {
    switch (this.direction) {
      case "up":
        if (this.top <= 0) {
          this.top = 0;
        } else {
          this.top -= this.speed;
        }
        break;
      case "down":
        if (this.top >= game.height - this.height) {
          this.top = game.height - this.height;
        } else {
          this.top += this.speed;
        }
        break;
      case "left":
        if (this.left <= 0) {
          this.left = 0;
        } else {
          this.left -= this.speed;
        }
        break;
      case "right":
        if (this.left >= game.width - this.width) {
          this.left = game.width - this.width;
        } else {
          this.left += this.speed;
        }
        break;
    }
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
  }
}

// we create the new player to keep track of all the properties
let player = new Player();


class Prisoner {
  constructor(){
    this.element = document.querySelector('#prisoner');
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = game.width;
    this.top = Math.floor(Math.random() * (game.height - this.height));
    
  }
  
  
  catch() {
    console.log("Prisoner caught");
    this.element.remove(); 
  }
}

let prisoner = new Prisoner()
console.log(prisoner);
