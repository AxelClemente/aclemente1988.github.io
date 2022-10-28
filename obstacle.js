class Pumpkins{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.heigth;
        this.size = Math.random() * 150 + 100;
        this.speed = Math.random() * 4 + 1;        // how fast they fall...
        // sprite animation
        this.frameX =Math.floor(Math.random() * 3);
        this.frameY =Math.floor(Math.random() * 3);
        this.spriteSize = 900/3;
        this.pumpkins = new Image();
        this.pumpkins.src = 'Images/pumpkings.png'
                
    }   
    
    drawPumpkin(){
        ctx.drawImage(this.pumpkins, this.frameX * this.spriteSize, this.frameY * this.spriteSize ,this.spriteSize, this.spriteSize, this.x, this.y, this.size, this.size);

    }

    update(){
        if (this.y > canvas.heigth){
            this.y = 0 - this.size; // TO CHECK !!!
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 150 + 100;
            this.speed = Math.random() * 4 + 1;
        }
        this.y += this.speed;
        
    }
        
    left(){ return this.x};

    right(){ return this.x+this.width};

    top(){ return this.y};

    bottom(){ return this.y+this.height};
      
}

// function checkGameOver(){
//     const crashed = pumpkinArray.some((e)=>{
//       return player.crashWith(e);
//     })
  
//     if(crashed){
//       stop();
//       //myGameArea.clear();
//     }
    
// }