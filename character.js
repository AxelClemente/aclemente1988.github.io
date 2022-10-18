class Monster {
    constructor(){
      this.x = canvas.width/2;
      this.y = 895;
      this.width = 392/3;
      this.height = 510/3;
      this.monster = new Image();
      this.monster.src = 'Images/monster.png'
    }
  
    drawMonster() {
        
        ctx.clearRect(0,0, canvas.width, canvas.heigth);
        ctx.drawImage(this.monster,this.x,this.y,this.width,this.height)
    }

    // collision detection
    left(){ 
        return this.x}
    
    right(){ 
        return this.x+this.width}
    
    top(){ 
        return this.y}
    
    bottom(){ 
        return this.y+this.height}
    
    crashWith(object){
        return !(this.bottom() < object.top() || this.top() > object.bottom() || this.right() < object.left() || this.left() > object.right());
    }
    

}

const player = new Monster();

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        player.x -= 40;
        if (player.x < 0) {
          player.x = 2500;
        }
        console.log('move left');
        break;
      case 39:
        player.x += 40;
        if (player.x > 2500) {
          player.x = 2500;
        }
        break;
        case 32:
        player.x -= 180;
        if (player.x > 2500) {
          player.x = 2500;
        }
        break;
    }
    player.drawMonster();
});
