import { clearCanvas, fullScreen, canvas } from "./canvas.js";
import { SpaceShip } from "./entities/player.js";
import { Meteor } from "./entities/meteor.js";
const wrapik = document.getElementById("wrapper");
const button = document.getElementById("btn");
const canvasek = document.getElementById("canvas");


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
let enemy = [new Meteor()];

ship.image.onload = () => {
  ship.draw();
  gameLoop();
};

function collision() {
  enemy.forEach((meteor, i) => {
    if (
      ship.position.x < meteor.position.x + meteor.size &&
      ship.position.x + ship.size.x > meteor.position.x &&
      ship.position.y < meteor.position.y + meteor.size &&
      ship.size.y + ship.position.y > meteor.position.y
    ) {
      enemy = [...enemy.splice(0, i),...enemy.splice(i+1, enemy.length)]
      enemy.push(new Meteor(), new Meteor());
    }
  });
}

const gameLoop = ()=> {
  clearCanvas();
  ship.update();
  ship.draw();
  //ticker++;
  //console.log(ticker);
  enemy.forEach( (enemy) =>{
    enemy.update(canvas);
    enemy.draw();
  });
  collision();
  requestAnimationFrame(gameLoop);
}

button.onclick = ()=>{
  canvasek.style.display = "flex";
  wrapik.style.display = "none";
  gameLoop();
};
