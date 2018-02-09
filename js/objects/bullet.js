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

function bulletAsteroids(){
  myGame.asteroids.forEach(function(asteroid){
    myGame.bullets.forEach(function(bullet){
      if(bullet.crashWith(asteroid)){
        console.log("({})")
        var index = myGame.bullets.indexOf(bullet)
        myGame.bullets.splice(index,1)
        myGame.player1.limitBullet--
        myGame.player1.score -= 6
      }
    });
  });
}

function bulletEnemies(){
  myGame.enemies.forEach(function(enemie){
    myGame.bullets.forEach(function(bullet){
      if(bullet.crashWith(enemie)){
        myGame.player1.score += 10
      var j = myGame.bullets.indexOf(bullet)
        myGame.bullets.splice(j,1)
      var z = myGame.enemies.indexOf(enemie)
        myGame.enemies.splice(z,1)
      }
    });
  });
}