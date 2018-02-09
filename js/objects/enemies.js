function Enemies(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = "images/War_Prism.png";
  this.image = new Image();
  
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
}
Enemies.prototype.drawEnemies = function(){
  this.ctx.drawImage(this.img,this.posX,this.posY,this.width,this.height)
  this.posX -= this.speedX;
}

function generateEnemies(){
  var Y = Math.floor((Math.random()*420)+0);
  var X = 1300
  if(frames < 1500){
    myGame.enemies.push(new Enemies(canvas,X, Y,5,5,100,80))
  }
}

function drawEnemies(){
  if(frames % 150 === 0) generateEnemies();
  myGame.enemies.forEach(function(enemy){
    enemy.drawEnemies();
  });
}