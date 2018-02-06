function Asteroids(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.imge = new Image();
  this.imge.src = "images/asteroid.png" 
}
Asteroids.prototype.drawAsteroid = function(){
  this.ctx.drawImage(this.imge,this.posX,this.posY,this.width,this.height)
  this.posX -= this.speedX;
  this.posY -= this.posY;
}

