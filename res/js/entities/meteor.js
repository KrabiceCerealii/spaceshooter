import { canvas, ctx } from "../canvas.js";
import { SpaceShip } from "./player.js";

let random_n = Math.floor((Math.random() * 100) + 50);

//snaha na spawn meteoru
/*
const meteor = [];
let posY = Math.floor((Math.random() * canvas.height));
let posX = Math.floor((Math.random() * canvas.width));
let ticker = 0;

const generate = () => {

  for(let i = ticker; i < random_n; i++){

      if(i%70 == 0) {
          if(meteor[i].position.x > canvas.width) {
              posY = Math.floor(Math.random() * (canvas.height) + 0);
              meteor[i].position.y = posY; 
              meteor[i].position.x = 0; 
      }

      } else if(i%300 == 0){
          if(meteor[i].position.x < 0) {
              posY = Math.floor(Math.random() * (canvas.height) + 0);
              meteor[i].position.y = posY; 
              meteor[i].position.x = canvas.width; 
      }
      }

      else if(i%1700 == 0) {
        if(meteor[i].position.y < 0) {
            posX = Math.floor(Math.random() * (canvas.width) + 0);
            meteor[i].position.x = posX; 
            meteor[i].position.x = 0; 
    }
    }

    else {
      if(meteor[i].position.y < 0) {
          posX = Math.floor(Math.random() * (canvas.width) + 0);
          meteor[i].position.x = posX; 
          meteor[i].position.y = canvas.height; 
    ticker++;
  }
  }


  meteor[i].update();
  }

}
*/

export class Meteor {
    constructor() {
        this.image = new Image();
        this.image.src = "/res/img/asteroid.jpg";
        this.size = {
          x: random_n,
          y: random_n,
        };
        this.position = {
          x: 100,
          y: 100
        } 
      }

      //shana V2
      /*
      spawn() {
        let posY = Math.floor((Math.random() * canvas.height));
        let posX = Math.floor((Math.random() * canvas.width));
        

        for(let i = 0; i < random_n; i++){

          if(i%70 == 0) {
              if(meteor[i].position.x > canvas.width) {
                  posY = Math.floor(Math.random() * (canvas.height) + 0);
                  meteor[i].position.y = posY; 
                  meteor[i].position.x = 0; 
          }
    
          } else if(i%300 == 0){
              if(meteor[i].position.x < 0) {
                  posY = Math.floor(Math.random() * (canvas.height) + 0);
                  meteor[i].position.y = posY; 
                  meteor[i].position.x = canvas.width; 
          }
          }
    
          else if(i%1700 == 0) {
            if(meteor[i].position.y < 0) {
                posX = Math.floor(Math.random() * (canvas.width) + 0);
                meteor[i].position.x = posX; 
                meteor[i].position.x = 0; 
        }
        }
    
        else {
          if(meteor[i].position.y < 0) {
              posX = Math.floor(Math.random() * (canvas.width) + 0);
              meteor[i].position.x = posX; 
              meteor[i].position.y = canvas.height; 
        ticker++;
      }
      }
    
      meteor[i].update();
      }
      }
*/
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