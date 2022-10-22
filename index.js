document.getElementById('mons2').style.display = 'none';
document.getElementById('game-board').style.display = 'none';
document.getElementById("start-button").onclick = () => {
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('mons').style.display = 'none';
    document.getElementById('song').play();
    
    myGameArea.start();
};
  
const road = new Image();
road.src = 'Images/Diseño sin título (3).png';
const myObstacles = [];
const pumpkinArray = [];
const numberOfPumpkin = 10;


    
const myGameArea = {
    canvas : document.getElementById('canvas'),
    frames: 0,
    start: function () {
      this.context= this.canvas.getContext ('2d');
      this.interval = setInterval(updateGameArea, 20); 
      this.context.drawImage(road,0,0,canvas.width,canvas.height);
      ;
    },
    score: function(){
      const points = Math.floor(this.frames / 40);
      this.context.font = '48px Creepster';
      this.context.fillStyle = "white";
      this.context.fillText(`Survival time: ${points}`,850, 100);
    },
    clear: function () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(road,0,0,canvas.width,canvas.height);
      
    },
    stop: function(){
      clearInterval(this.interval);
    }
    
    
    
};
  
  
  
  
  
function updateGameArea() { ///////////////////////////////////////////////////////////////////////////////////////// Funcion Principal!!!!!
    myGameArea.clear();
    player.update();
    updateObstacles(); 
    pumpkin.update();
    pumpkin2.update()
    pumpkin3.update()
    pumpkin4.update()
    pumpkin5.update()
    pumpkin6.update()
    pumpkin7.update()
    pumpkin7.update()
    candy.update()
    candy2.update()
    checkGameOver();
    myGameArea.score();
}                           ///////////////////////////////////////////////////////////////////////////////////////// 
  console.log(pumpkinArray)
  
  
  
function checkGameOver(){
    const crashed = myObstacles.some((e)=>{
      return player.crashWith(e);
    })
  
    if(crashed){
      myGameArea.stop();
      document.getElementById('game-board').style.display = 'none';
      document.getElementById('mons2').style.display = 'block';
      document.getElementById('song').pause();
      
      //myGameArea.clear();
    }
}
  
  
  


window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        player.x -= 40;
        if (player.x < 0) {
          player.x = 1900;
        }
        console.log('move left');
        break;
      case 39:
        player.x += 40;
        if (player.x > 1900) {
          player.x = 1900;
        }
        break;
        case 32:
        player.x -= 180;
        if (player.x > 1900) {
          player.x = 1900;
        }
        break;
    }
    player.update();
});
  