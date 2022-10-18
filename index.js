const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth-500;
canvas.heigth = window.innerHeight;

console.log(canvas.width)

let pumpkinArray = [];
const numberOfPumpkin = 20;

let particleArray = [];
const numberOfParticle = 5;
let pumpkins = new Image();
pumpkins.src = 'Images/pumpkings.png'

function init(){
    for (let i =0; i<numberOfPumpkin; i++){
        pumpkinArray.push(new Pumpkins());
    }   
}

function initParticle(){
    for (let i =0; i<numberOfParticle; i++){
        particleArray.push(new Particles());
    }   
}

initParticle();
init();


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    player.drawMonster();
    //lollypop.drawCandy();
    

    for (let i=0; i<pumpkinArray.length; i++){
        pumpkinArray[i].update();
        pumpkinArray[i].drawPumpkin();
    }

    for (let i=0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].drawParticles();
    }
    
    

    requestAnimationFrame(animate);
}

document.getElementById('game-board').style.display = 'none';

document.getElementById("start-button").onclick = () => {
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('mons').style.display = 'none';
    document.getElementById('texto').style.display = 'none';
    animate();
};