class Obstacle {
    constructor(x,y,width,height){
      this.x = 500;
      this.y = 500;
      this.width = width;
      this.height = height;
    }
    drawRectanlges(){
      const ctx = myGameArea.context;
      ctx.fillStyle = 'orange';
      ctx.fillRect(this.x,this.y,this.width,this.height);
    }
   
    left(){ return this.x}
  
    right(){ return this.x+this.width}
  
    top(){ return this.y}
  
    bottom(){ return this.y+this.height}

    update(){
        if (this.y > canvas.height){
            this.y = 0;
            let minWidth = 480;
            let maxWidth = 160;
            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
            let x = Math.floor(Math.random()*(canvas.width-maxWidth-4));
            myObstacles.push(new Obstacle(x,0,width,60));

        }
    }

}

