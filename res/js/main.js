import { clearCanvas, fullScreen, canvas } from "./canvas.js";
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
const projectile = new Projectile(ship.position.x, ship.position.y - ship.size.y/2, ship.rotation);
let shoot = [];
let enemy = [new Meteor, new Meteor, new Meteor];

ship.image.onload = () => {
  ship.draw();
  gameLoop();
};

function gameLoop() {
  clearCanvas();
  ship.update();
  ship.draw();
  //ticker++;
  //console.log(ticker);
  enemy.forEach( (teacher) =>{
    teacher.update(canvas);
    teacher.draw();
  })
  shoot.forEach( (projetill) =>{
    projetill.update();
    projetill.draw();
  })
  requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case " ":
      shoot.push(new Projectile(ship.position.x, ship.position.y - ship.size.y/2, ship.rotation));
      break;
  }
});
