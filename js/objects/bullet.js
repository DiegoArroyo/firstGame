function Bullet(canvas,posX,posY,speedX,radius,color){
  this.ctx = canvas;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.radius = radius;
  this.color = color;
  this.drawBullet();
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