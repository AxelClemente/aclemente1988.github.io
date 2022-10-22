class Pumpkins4 {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 392/5;
      this.height = 510/5;
      this.pumpkin4Image = new Image();
      this.pumpkin4Image.src = 'Images/pumpkin_face_light_1.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.pumpkin4Image,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  

   
  
  

 }
 const pumpkin4 = new Pumpkins4();

 class Pumpkins5 {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 392/7;
      this.height = 510/7;
      this.pumpkin5Image = new Image();
      this.pumpkin5Image.src = 'Images/pumpkin_face_light_2.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.pumpkin5Image,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  

   
  
  

 }
 const pumpkin5 = new Pumpkins5();

 class Pumpkins6 {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 392/10;
      this.height = 510/10;
      this.pumpkin6Image = new Image();
      this.pumpkin6Image.src = 'Images/pumpkin_face_light_3.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.pumpkin6Image,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  
 }
 const pumpkin6 = new Pumpkins6();

 class Pumpkins7 {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 392/10;
      this.height = 510/10;
      this.pumpkin7Image = new Image();
      this.pumpkin7Image.src = 'Images/pumpkin_face_light_4.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.pumpkin7Image,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  
 }
 const pumpkin7 = new Pumpkins7();

 class Candy {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 108;
      this.height = 250;
      this.candy = new Image();
      this.candy.src = 'Images/purple-n-pink.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.candy,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  
 }
 const candy = new Candy();

 class Candy2 {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.width = 108;
      this.height = 250;
      this.candy2 = new Image();
      this.candy2.src = 'Images/purple-n-pink.png'
      this.speed = Math.random() * 0.1 + 0.1;
    }
  
    update() {
      //const ctx = myGameArea.context;
      //ctx.fillStyle = this.color;
      myGameArea.context.drawImage(this.candy2,this.x,this.y,this.width,this.height);
      if (this.y > canvas.heigth){
        this.y = 0 ; // TO CHECK !!!
        this.x = Math.random() * canvas.width;
        this.speed = Math.random() * 0.1 + 0.1;
    }
    this.y += this.speed;
    }
  
 }
 const candy2 = new Candy2();