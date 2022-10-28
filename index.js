const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/1.2;
canvas.heigth = window.innerHeight;
let frame = 0;


console.log(canvas.width)
// Arrays
let pumpkinArray = [];
let particleArray = [];
let myObstacles = [];

// Frequency or game difficulty
const numberOfPumpkin = 10;
const numberOfParticle = 10;


// General Functions
function score(){
    let points = Math.floor(frame/50);
    ctx.font = "55px Creepster";
    ctx.fillStyle = 'white';
    ctx.fillText(`Survival time: ${points}`,1150, 100);
}
// Push the instances to the Arrays (pumpkinsArray and particlesArray)
function init(){
    for (let i =0; i<numberOfPumpkin; i++){
        pumpkinArray.push(new Pumpkins());
    }   
}
init();

function initParticle(){
    for (let i =0; i<numberOfParticle; i++){
        particleArray.push(new Particles());
    }   
}
initParticle();

// checkGameOver = () => {
//     const crashed = pumpkinArray.some((e)=>{
//         return player.crashWith(e);
//       })
    
//       if(crashed){
//        cancelAnimationFrame(animationId);
//     }
//   };


// Logic for player colliding with obstacles                NOT WORKING!
// function checkGameOver(){
    

    // pumpkinArray.forEach((obstacle) =>{
        
        
    //     if (player.crashWith(obstacle)){
    //         // cancelAnimationFrame(animate)
    //         console.log('crash')
    //     }
        
    // })


        
        //     console.log('crash')
        //   //myGameArea.clear();
        // }
    
      
  
    // if(crash){
        
    //     cancelAnimationFrame(animate)
        
    // }
   
// }
// Logic for player successfully not colliding with obstacles        NOT WORKING!
// function gameOver(){
//     if (frame===10){
//         cancelAnimationFrame(animate)
//     }
// }

// function handleCandys(){
//     for (let i=0; i< particleArray)
// }


function animate(){
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    player.drawMonster();
    // checkGameOver();
    score();
   
    // for (let i=0; i<pumpkinArray.length; i++){
    //     pumpkinArray[i].update();
    //     pumpkinArray[i].drawPumpkin();
    // }

    // for (let i=0; i<particleArray.length; i++){
    //     particleArray[i].update();
    //     particleArray[i].drawParticles();
    // }

    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += 20;
        myObstacles[i].update();
        myObstacles[i].drawRectanlges();
    
    }  
    
    console.log()

    requestAnimationFrame(animate);
}





document.getElementById('game-board').style.display = 'none';

document.getElementById("start-button").onclick = () => {
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('mons').style.display = 'none';
    document.getElementById('texto').style.display = 'none';
    window.addEventListener('click', ()=>{
        document.getElementById('song').play();
    });
    
    animate();
};