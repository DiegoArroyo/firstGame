function SpaceShip(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX;
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = "images/spco.png";
  this.img2 = new Image();
  this.img2.src ="images/F5S4.png";
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
  this.score = 0;
  this.score2 = 0;
  this.lives = 3;
  this.lives2 = 3;
  this.limitBullet = 3;
  this.limitBullet2 = 3;
}
SpaceShip.prototype.drawSpaceShip = function(){
  this.ctx.drawImage(this.img,this.posX,this.posY,this.width,this.height)
}
SpaceShip.prototype.drawSpaceShip2 = function(){
  this.ctx.drawImage(this.img2,this.posX,this.posY,this.width,this.height)
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
      console.log(myGame.player1)
      // myGame.player1.player1Data();
      // myGame.player2.player2Data();
    }
  });
  myGame.asteroids.forEach(function(asteroid){
    if(myGame.player2.crashWith(asteroid)){
      myGame.player2.lives2 -= myGame.player2.lives2;

    }
  });
  myGame.player1.player1Data();
  myGame.player2.player2Data();
}

function playerEnemies(){
  myGame.enemies.forEach(function(enemy){
    if(myGame.player1.crashWith(enemy)){
      var eny = myGame.enemies.indexOf(enemy)
      myGame.enemies.splice(eny,1)
      myGame.player1.lives --
    }
  });
  myGame.enemies.forEach(function(enemy){
    if(myGame.player2.crashWith(enemy)){
      var enm = myGame.enemies.indexOf(enemy)
      myGame.enemies.splice(enm,1)
      myGame.player2.lives2 --
    }
  });
}
function playerBigBoss(){
    if(myGame.player1.crashWith(myGame.boss)){
      myGame.player1.lives -= myGame.player1.lives
    }
    if(myGame.player2.crashWith(myGame.boss)){
      myGame.player2.lives2 -= myGame.player2.lives2
    }
}
//Checara cuantas vidas tiene y cuantas se le quitan por colision o disparo enemigo
//Se le puden agregar vidas si mata enemigos o las recoge
SpaceShip.prototype.player1Data = function(){
  this.ctx.font ="17px Arial";
  this.ctx.fillStyle = "lime"
  this.ctx.fillText("P1 Lives: "+ this.lives,100,20);
  this.ctx.fillText("Score: "+ this.score,200,20);
  this.ctx.font ="15px Arial";
  this.ctx.fillText("P1",this.posX+35,this.posY+this.height);
}
SpaceShip.prototype.player2Data = function(){
  this.ctx.font ="17px Arial";
  this.ctx.fillStyle = "orange"
  this.ctx.fillText("P2 Lives: "+ this.lives2,300,20);
  this.ctx.fillText("Score: "+ this.score2,400,20);
  this.ctx.font ="15px Arial";
  this.ctx.fillText("P2",this.posX+35,this.posY+this.height);
}