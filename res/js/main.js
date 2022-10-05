const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const image = new Image();
image.src = './res/img/Rocket.jpg';


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor() {
        this.position = {
            x: 750,
            y: 375
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;
        }
    }

    draw() {
        //c.fillStyle = 'red';
        //c.fillRect(this.position.x, this.position.y, this.width, this.height);
        if (this.image) {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }
}

const player = new Player();
player.draw();

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

animate();