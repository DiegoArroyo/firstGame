
function Enemies(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.imge = new Image();
  this.imge.src = "images/ScaryTerry.png";
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
}
Enemies.prototype.drawEnemies = function(){
  this.ctx.drawImage(this.imge,this.posX,this.posY,this.width,this.height)
  this.posX -= this.speedX;
  // this.posY -= this.speedY;
}
