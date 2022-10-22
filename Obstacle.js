class Obstacle {
    constructor(x,y,width,height){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    update(){
      const ctx = myGameArea.context;
      ctx.fillStyle = 'orange';
      ctx.fillRect(this.x,this.y,this.width,this.height);
    }
   
    left(){ return this.x}
  
    right(){ return this.x+this.width}
  
    top(){ return this.y}
  
    bottom(){ return this.y+this.height}
}

function updateObstacles(){
    myGameArea.frames +=2;
    if (myGameArea.frames % 120 == 0){
        let minWidth = 480;
        let maxWidth = 160;
        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
        let x = Math.floor(Math.random()*(canvas.width-maxWidth-4));
        myObstacles.push(new Obstacle(x,0,width,60));
      }
      for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += 20;
        myObstacles[i].update();
      }
}
