import { canvas, ctx } from "../canvas.js";
import { SpaceShip } from "./player.js";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export class Meteor {
  constructor() {
    this.image = new Image();
    this.velocityX = Math.floor(Math.random() * 4 +1);
    this.velocityY = Math.floor(Math.random() * 2 +1);
    this.image.src = ".../img/asteroid.jpg";
    this.size = Math.floor(Math.random() * 100 + 50);
    this.position = {
      x: getRndInteger(0, canvas.width),
      y: getRndInteger(0, canvas.height/3)
    };
  }

  update(canvas) {
    this.position.x += this.velocityX;
    this.position.y += this.velocityY;
    if (this.position.x > canvas.width - this.size/2) {
      this.velocityX *= -1;
      this.velocityY *= 1;
    }
    else if(this.position.x <  -this.size/2){
      this.velocityX *= -1;
      this.velocityY *= 1;
    }
    else if(this.position.y >  canvas.height - this.size/2){
      this.velocityX *= 1;
      this.velocityY *= -1;
    }
    else if(this.position.y <  -this.size/2){
      this.velocityX *= 1;
      this.velocityY *= -1;
    }
  }


  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
}
