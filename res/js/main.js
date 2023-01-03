import { clearCanvas, fullScreen } from "./canvas.js";
import { SpaceShip } from "./entities/player.js";
import { Projectile } from "./entities/shooting.js";

fullScreen();

window.addEventListener("resize", () => {
  fullScreen();
});

const ship = new SpaceShip();
const projectile = new Projectile();

ship.image.onload = () => {
  ship.draw();
  gameLoop();
};
projectile.image.onload = () => {
  projectile.draw();
  gameLoop();
};

function gameLoop() {
  clearCanvas();
  ship.update();
  ship.draw();
  //projectile.update();
  projectile.draw();
  requestAnimationFrame(gameLoop);
}
