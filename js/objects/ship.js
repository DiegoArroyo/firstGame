function SpaceShip(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = "images/ship015blue.png";
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
  this.score = 0;
  this.lives = 3;
  this.limitBullet = 3;
  this.limitBullet2 = 3;
}
SpaceShip.prototype.drawSpaceShip = function(){
  this.ctx.drawImage(this.img,this.posX,this.posY,this.width,this.height)
}
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
SpaceShip.prototype.crashWith = function (item){
  return !((this.bottom() < item.top())    ||
           (this.top()    > item.bottom()) ||
           (this.right()  < item.left())   ||
           (this.left()   > item.right()))
}

function playerAsteroids(){
  myGame.asteroids.forEach(function(asteroid){
    if(myGame.player1.crashWith(asteroid)){
      myGame.player1.lives -= myGame.player1.lives;
    }
    if(asteroid.posX < 0){
      myGame.asteroids.splice(asteroid,1)
    }
  });
}

function playerEnemies(){
  myGame.enemies.forEach(function(enemie){
    if(myGame.player1.crashWith(enemie)){
      var en = myGame.enemies.indexOf(enemie)
      myGame.enemies.splice(en,1)
      myGame.player1.lives --
    }
    if(enemie.posX <0 ){
      myGame.enemies.splice(enemie,1)
    }
  });
}
//Checara cuantas vidas tiene y cuantas se le quitan por colision o disparo enemigo
//Se le puden agregar vidas si mata enemigos o las recoge
SpaceShip.prototype.playerLives = function(){
  this.ctx.font ="20px Arial";
  this.ctx.fillStyle = "#fff";
  //Tratar de cambiar por una barra que vaya disminuyendo su color de relleno con cada vida 
  this.ctx.fillText("Lives "+ this.lives, this.posX + (this.width*0.34),this.posY);

  if(this.lives === 0){
    stopGame();
  }
  // if(powerUp()){
  //   this.lives ++
  // }
}
SpaceShip.prototype.playerScore = function(){
  this.ctx.font ="20px Arial";
  this.ctx.fillStyle = "#fff";
  //Tratar de cambiar por una barra que vaya disminuyendo su color de relleno con cada vida 
  this.ctx.fillText("Score "+ this.score , this.posX + (this.width*0.34),this.posY + (this.height + 12));
}
