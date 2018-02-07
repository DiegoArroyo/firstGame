function Bullet(canvas,posX,posY,speedX,radius,color){
  this.ctx = canvas;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.radius = radius;
  this.color = color;
  this.drawBullet();
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + 20) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + 20)};
  //--------------------------------------------------------------
}
Bullet.prototype.drawBullet = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, true);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}
Bullet.prototype.moveBullet = function(){
  this.posX += this.speedX;
}
Bullet.prototype.crashWith = function (asteroid){
  return !((this.bottom() < asteroid.top())    ||
           (this.top()    > asteroid.bottom()) ||
           (this.right()  < asteroid.left())   ||
           (this.left()   > asteroid.right()))
}