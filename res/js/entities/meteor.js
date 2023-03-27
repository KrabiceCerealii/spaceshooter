import { canvas, ctx } from "../canvas.js";
import { SpaceShip } from "./player.js";

let random_n = Math.floor((Math.random() * 100) + 50);

export class Meteor {
    constructor() {
        this.image = new Image();
        this.image.src = "/res/img/asteroid.jpg";
        this.size = {
          x: random_n,
          y: random_n,
        };
        this.position = {
          x: 100,
          y: 100
        } 
      }

      draw() {
        ctx.drawImage(
          this.image,
          this.position.x, 
          this.position.y,
          this.size.x,
          this.size.y,
        );
      }
}