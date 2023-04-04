import { canvas, ctx } from "../canvas.js";
import { Meteor } from "./meteor.js";

export class SpaceShip {
  constructor() {
    this.image = new Image();
    this.image.src = ".../img/Rocket.jpg";
    this.size = {
      x: 100,
      y: 100,
    };
    this.position = {
      x: canvas.width / 2,
      y: canvas.height * 0.75,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.force = {
      x: 0,
      y: 0,
    };
    this.friction = 0.99;
    this.maxForce = 2;

    this.rotation = Math.PI + Math.PI / 2;
    this.rotationVel = 0;
    this.rotationForce = 0;
    this.rotationFrictio = 0.91;
    this.rotationMaxForce = 0.03;

    this.status = "idle";

    this.frames = {
      idle: 0,
      boost_forwards: 1,
      boost_backwards: 2,
      turn_right: 3,
      turn_left: 4,
    };

    this.addControls();
  }

  draw() {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(
      this.image,
      this.frames[this.status] * this.size.x,
      0,
      this.size.x,
      this.size.y,
      -this.size.x / 2,
      -this.size.y / 2,
      this.size.x,
      this.size.y
    );

    ctx.restore();
   // console.log(this.status);
  }

  update() {
    this.velocity.x += this.force.x;
    this.velocity.y += this.force.y;
    this.force.x = 0;
    this.force.y = 0;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    this.rotationVel += this.rotationForce;
    this.rotationForce = 0;
    this.rotation += this.rotationVel;
    this.rotationVel *= this.rotationFrictio;

    this.handleTinyVel();
    this.boundToCanvas();
  }

  addControls() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.boost({ direction: "forwards" });
          break;
        case "ArrowDown":
          this.boost({ direction: "backwards" });
          break;
        case "ArrowLeft":
          this.turn({ direction: "left" });
          break;
        case "ArrowRight":
          this.turn({ direction: "right" });
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (keys.includes(e.key)) {
        this.status = "idle";
      }
    });
  }

  boost({ direction }) {
    this.status = `boost_${direction}`;
    const sign = direction == "forwards" ? 1 : -1;
    this.force = {
      x: this.maxForce * sign * Math.cos(this.rotation),
      y: this.maxForce * sign * Math.sin(this.rotation),
    };
  }

  turn({ direction }) {
    this.status = `turn_${direction}`;
    const sign = direction == "right" ? 1 : -1;
    this.rotationForce = sign * this.rotationMaxForce;
  }

  handleTinyVel(thresholdSmall = 0.01) {
    if (Math.abs(this.rotationVel) < thresholdSmall) {
      this.rotationVel = 0;
    }
    if (Math.abs(this.velocity.x) < thresholdSmall) {
      this.velocity.x = 0;
    }
    if (Math.abs(this.rotationVel.y) < thresholdSmall) {
      this.rotationVel.y = 0;
    }
  }

  handleBigVel(thresholdBig = 2) {
    if (Math.abs(this.rotationVel) > thresholdBig) {
      this.rotationVel = 0;
    }
    if (Math.abs(this.velocity.x) > thresholdBig) {
      this.velocity.x = 0;
    }
    if (Math.abs(this.rotationVel.y) > thresholBig) {
      this.rotationVel.y = 0;
    }
  }

  boundToCanvas() {
    if (this.position.x > canvas.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = canvas.width;
    } else if (this.position.y > canvas.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = canvas.height;
    }
  }


}
