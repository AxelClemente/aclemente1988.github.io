const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/1.2;
canvas.heigth = window.innerHeight;
let frame = 100;

console.log(canvas.width)

let myReq;

let pumpkinArray = [];
const numberOfPumpkin = 10;

let particleArray = [];
const numberOfParticle = 10;
let pumpkins = new Image();
pumpkins.src = 'Images/pumpkings.png'

function score(){
    let points = Math.floor(frame/50);
    ctx.font = "55px Creepster";
    ctx.fillStyle = 'white';
    ctx.fillText(`Survival time: ${points}`,1150, 100);
}

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
console.log(score);

function checkGameOver(){
    const crashed = pumpkinArray.some((obstacle) =>{
        return player.crashWith(obstacle);
    })
  
    if(crashed){
        
        console.log(`GAME OVER`)
        
    }

   
}


function animate(){
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    player.drawMonster();
    checkGameOver();
    score();
    
   

    for (let i=0; i<pumpkinArray.length; i++){
        pumpkinArray[i].update();
        pumpkinArray[i].drawPumpkin();
    }

    for (let i=0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].drawParticles();
    }


    
    
    console.log(checkGameOver);
    requestAnimationFrame(animate);
    
}



console.log(checkGameOver);

document.getElementById('game-board').style.display = 'none';

document.getElementById("start-button").onclick = () => {
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('mons').style.display = 'none';
    document.getElementById('texto').style.display = 'none';
    animate();
};