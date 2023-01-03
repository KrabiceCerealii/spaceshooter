import { canvas, ctx } from "../canvas.js";
import { SpaceShip } from "./player.js";

const ship = new SpaceShip();

export class Projectile {
    constructor() {
        this.image = new Image();
        this.image.src = "/res/img/projectile.jpg";
        this.size = {
          x: 10,
          y: 10,
        };
        this.position = {
          x: ship.position.x,
          y: ship.position.y
        }
      }

      draw() {
        ctx.drawImage(
          this.image,
          this.size.x,
          this.size.y,
          this.position.x, 
          this.position.y
        );
      }
}