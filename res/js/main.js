const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.src = './res/img/Rocket.jpg';


class Player {
    constructor() {

        this.velocity = {
            x: 0,
            y: 0
        }

        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height / 2 - this.height / 2
            }
        }
    }

    draw() {
        //ctx.fillStyle = 'red';
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        if (this.image) {
            ctx.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            );

        }
    }

}

const player = new Player();
player.draw();

function animate() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

animate();

document.addEventListener("keydown", ({ key }) => {
    switch (key) {
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowLeft':
            console.log('Rotate left');
            break;
        case 'ArrowRight':
            console.log('Rotate right');
            break;
        case ' ':
            console.log('Pew');
            break;
        case 'Shift':
            console.log('Boost');
            break;
    }
});
