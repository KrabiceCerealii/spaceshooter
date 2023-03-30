import { clearCanvas, fullScreen, canvas } from "./canvas.js";
import { SpaceShip } from "./entities/player.js";
import { Projectile } from "./entities/shooting.js";
import { Meteor } from "./entities/meteor.js";
const wrapik = document.getElementById("wrapper");
const button = document.getElementById("btn");
const canvasek = document.getElementById("canvas");
let start = false;

button.onclick = ()=>{
  canvasek.style.display = "flex";
  wrapik.style.display = "none";
  start === true;
};

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
const meteor = new Meteor();
let shoot = [];
let enemy = [new Meteor, new Meteor, new Meteor];


ship.image.onload = () => {
  if(start === true){
  ship.draw();
  }
  gameLoop();
};

/*function collision(){
    for (let i = 0; i < enemy.length; i++) {
      if(ship.position.x + ship.width >= enemy[i].position.x &&
        ship.position.x <= enemy[i].position.x + meteor.width &&
        ship.position.y + ship.height >= enemy[i].position.y &&
        ship.position.y <= enemy[i].position.y + meteor.height){
          console.log("kokot")
        }
    }
  }*/

function gameLoop() {
  clearCanvas();
  ship.update();
  ship.draw();
  //ticker++;
  //console.log(ticker);
  enemy.forEach( (teacher) =>{
    teacher.update(canvas);
    teacher.draw();
  });
  //collision();
  /*shoot.forEach( (projetill) =>{
    projetill.update();
    projetill.draw();
  })*/
  requestAnimationFrame(gameLoop);
  console.log(start);
}


window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case " ":
      shoot.push(new Projectile(ship.position.x, ship.position.y - ship.size.y/2, ship.rotation));
      break;
  }
});
