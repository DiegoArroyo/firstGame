function BigBoss(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = "images/flipup02.png";
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
}
BigBoss.prototype.drawBigBoss = function(){
  if(frames < 1600){
  this.ctx.drawImage(this.img,this.posX,this.posY,this.width,this.height)
  this.posX -= this.speedX;
  }
}
