import { clearCanvas, fullScreen } from "./canvas.js";
import { SpaceShip } from "./entities/player.js";
import { Projectile } from "./entities/shooting.js";
import { Meteor } from "./entities/meteor.js";

fullScreen();

window.addEventListener("resize", () => {
  fullScreen();
});

//pro scoreboard
/*window.onbeforeunload = closingCode;
function closingCode(){
   // do something...
   return null;
}
*/

let ticker = 0;
const ship = new SpaceShip();
const projectile = new Projectile(ship.position.x, ship.position.y - ship.size.y/2);
const meteor = new Meteor(ship.position.x, ship.position.y - ship.size.y/2);

ship.image.onload = () => {
  ship.draw();
  gameLoop();
};
projectile.image.onload = () => {
  projectile.draw();
  gameLoop();
};
meteor.image.onload = () => {
  meteor.draw();
  gameLoop();
};

function gameLoop() {
  clearCanvas();
  ship.update();
  ship.draw();
  //projectile.update();
  projectile.draw();
  meteor.draw();
  ticker++;
  console.log(ticker);
  requestAnimationFrame(gameLoop);
}
