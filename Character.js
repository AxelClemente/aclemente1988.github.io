class car {
    constructor(){
      this.x = canvas.width/2;
      this.y = 830;
      this.width = 392/3;
      this.height = 510/3;
      this.monster = new Image();
      this.monster.src = 'Images/monster.png'
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.monster,this.x,this.y,this.width,this.height)
    }
  
    left(){ 
      return this.x}
  
    right(){ 
      return this.x+this.width}
  
    top(){ 
      return this.y}
  
    bottom(){ 
      return this.y+this.height}
  
    crashWith(axel){
      return !(this.bottom() < axel.top() || this.top() > axel.bottom() || this.right() < axel.left() || this.left() > axel.right());
    }
  
  
  }
  
  const player = new car();