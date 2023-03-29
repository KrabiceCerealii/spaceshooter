import { canvas, ctx } from "../canvas.js";
import { SpaceShip } from "./player.js";


export class Projectile {
    constructor(ship_x, ship_y, ship_rotation) {
        this.image = new Image();
        this.image.src = "/res/img/projectile.jpg";
        this.velocity = 5;
        this.size = {
          x: 10,
          y: 10,
        };
        this.position = {
          x: ship_x - 5,
          y: ship_y -5
        } 
        this.friction = 0.99;

        this.rotation = ship_rotation;
      }

      draw() {
        ctx.save();
        ctx.drawImage(
          this.image,
          this.position.x,
          this.position.y,
    );
      }

      update() {
        this.position.x += this.velocity.x;
      }
}