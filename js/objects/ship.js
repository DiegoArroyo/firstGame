function SpaceShip(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.imge = new Image();
  this.imge.src = "images/Rick-Spaceship.png"
  this.score = 0;
  this.lives = 3;
  this.bullets = [];
}
//Funcion para dibujar la nave
SpaceShip.prototype.drawSpaceShip = function(){
  this.ctx.drawImage(this.imge,this.posX,this.posY,this.width,this.height)
}
//Funciones para los movimientos de la nave
SpaceShip.prototype.moveUp = function(){
  if(this.posY > 0){
    this.posY -= this.speedY;
  }else{
    return;
  }
}
SpaceShip.prototype.moveDown = function(){
  if(this.posY < myGame.spaceBoard.height - this.height){
    this.posY += this.speedY;
  }else{
    return;
  }
}
SpaceShip.prototype.moveLeft = function(){
  if(this.posX > 0){
    this.posX -= this.speedX;
  }else{
    return;
  }
}
SpaceShip.prototype.moveRight = function(){
  if(this.posX < myGame.spaceBoard.width - this.width){
    this.posX += this.speedX;
  }else{
    return;
  }
}
//Checara cuantas vidas tiene y cuantas se le quitan por colision o disparo enemigo
//Se le puden agregar vidas si mata enemigos o las recoge
SpaceShip.prototype.numberOfLives = function(){

}

//Checara cuantos disparos le quedan y cuantos disparas se le agregan por matar enemigos [2]
