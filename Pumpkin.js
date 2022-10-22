
class Pumpkins {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 392/2;
      this.height = 510/2;
      this.monster = new Image();
      this.monster.src = 'Images/pumpkin_face_no_light_1.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.monster,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  

    left(){ 
      return this.x}
  
    right(){ 
      return this.x+this.width}
  
    top(){ 
      return this.y}
  
    bottom(){ 
      return this.y+this.height}
  
    crashWithPumpkin(object){
      return !(this.bottom() < object.top() || this.top() > object.bottom() || this.right() < object.left() || this.left() > object.right());
    }
  
  
  
  

 }
 const pumpkin = new Pumpkins();