import { clearCanvas, fullScreen, canvas, ctx } from "./canvas.js";
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
let hp = 3;
let score = 0;
const ship = new SpaceShip();
let enemy = [new Meteor()];

ship.image.onload = () => {
  ship.draw();
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
      hp --;
      score += 50;
    }
  });
}

function hpGraber() {
  ctx.fillStyle = "white";
  ctx.font = "bold 50px Axeman";
  ctx.fillText(`HP: ${hp}`, 20, 60);
  if(ticker%1000 == 0){
    if(hp == 5){}
    else{
      hp++
    }
  }
  if(hp == 0){
    ctx.fillStyle = "white";
    ctx.font = "bold 100px Axeman";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Game Over", canvas.width/2 - 100, canvas.height/2);
    clearInterval(gameLoop);
  }
}

function scoreGraber() {
  ctx.fillStyle = "white";
  ctx.font = "bold 50px Axeman";
  ctx.fillText(`Score: ${score}`, 20, 120);
  if(hp == 0){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

button.onclick = ()=>{
  canvasek.style.display = "flex";
  wrapik.style.display = "none";
  gameLoop();
};

const gameLoop = ()=> {
  clearCanvas();
  scoreGraber();
  hpGraber();
  ship.update();
  ship.draw();
  ticker++;
  enemy.forEach( (enemy) =>{
    enemy.update(canvas);
    enemy.draw();
  });
  collision();
  requestAnimationFrame(gameLoop);
}

