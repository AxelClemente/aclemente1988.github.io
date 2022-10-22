class Pumpkins3 {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 392/5;
      this.height = 510/5;
      this.pumpkin3Image = new Image();
      this.pumpkin3Image.src = 'Images/pumpkin_face_no_light_3.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.pumpkin3Image,this.x,this.y,this.width,this.height);
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
  
    crashWithPumpkin(axel){
      return !(this.bottom() < axel.top() || this.top() > axel.bottom() || this.right() < axel.left() || this.left() > axel.right());
    }
  
  
  
  

 }
 const pumpkin3 = new Pumpkins3();