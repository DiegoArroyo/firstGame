function BigBoss(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = "images/ScaryTerry.png";
  this.image = new Image();
  
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
}
BigBoss.prototype.drawBigBoss = function(){
  this.ctx.drasImage(this.image,this.posX,this.posY,this.width,this.height)
  this.posX -= this.speedX;
}
function generateBigBoss(){
  var Y = Math.floor((Math.random()*420)+0);
  var X = 1300
  if(frames = 2000){
    myGame.boss.push(new (canvas,X, Y,5,5,100,80))
  }
}
function drawBigBoss(){
  generateBigBoss();
  myGame.boss.forEach(function(boss){
    boss.drawBigBoss();
  });
}