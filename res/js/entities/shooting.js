import { canvas, ctx } from "../canvas.js";
import { SpaceShip } from "./player.js";


export class Projectile {
    constructor(ship_x, ship_y) {
        this.image = new Image();
        this.image.src = "/res/img/projectile.jpg";
        this.size = {
          x: 10,
          y: 10,
        };
        this.position = {
          x: ship_x,
          y: ship_y
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