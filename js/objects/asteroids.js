function Asteroids(canvas,posX,posY,speedX,speedY,width,height){
  this.ctx = canvas;
  this.posX = posX
  this.posY = posY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = "images/White_Asteroid.png";
  //porpiedades para checar si mi objeto choca con otro.
  this.left =   function()  { return  this.posX                };
  this.right =  function()  { return  (this.posX + this.width) };
  this.top =    function()  { return  this.posY                };
  this.bottom = function()  { return  (this.posY + this.height)};
  //--------------------------------------------------------------
}
Asteroids.prototype.directionAsteroid = function (){
  if (this.posY < 0) {
    this.speedY = 12
    //this.speedX --
  } else if(this.posY + this.height > myGame.spaceBoard.height){
    this.speedY = -12
    //this.speedX --
  }
}

Asteroids.prototype.updateAsteroid = function (){
  this.posY += this.speedY
  this.posX -= this.speedX;
  this.directionAsteroid();
}

Asteroids.prototype.drawAsteroid = function(){
  this.ctx.drawImage(this.img,this.posX,this.posY,this.width,this.height)
  this.posX -= this.speedX;
  this.updateAsteroid();
}

function generateAsteroids(){
  var y = Math.floor((Math.random()*420)+0);
  var x = 1300;
  if(frames < 1000){
    myGame.asteroids.push(new Asteroids(canvas,x, y,2,-10,100,80))
  }
}

function drawAsteroids(){
  if(frames % 100 === 0) generateAsteroids();
    myGame.asteroids.forEach(function(asteroid){
    asteroid.drawAsteroid();
  });
}