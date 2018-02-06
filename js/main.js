var canvas;
var myGame;
var fps = 20;
var frames = 0;
var asteroids = [];
$(document).ready(function(){
  $(".start-button").on("click", function(){
    canvas = document.getElementById("space-board").getContext('2d');
    myGame = new Game (canvas);
    keyListenerPlayers();
    var interval = setInterval(function(){
      myGame.spaceBoard.updateSpaceBoard();
      for(i=0; i<myGame.player1.bullets.length; i ++){
        myGame.player1.bullets[i].drawBullet()
        myGame.player1.bullets[i].moveBullet()
      }
      frames++;
      putAsteroids();
      console.log(asteroids);
    },1000/fps)
  });
});

//Funcion para los eventos del tablero
function keyListenerPlayers(){
  document.addEventListener("keydown", function(e){
    switch (e.keyCode) {
      case 38: //W 87
        myGame.player1.moveUp()               
        break;
      case 40: //S 83
        myGame.player1.moveDown()
        break;
      case 37://A 65
        myGame.player1.moveLeft()
        break;
      case 39://D 68
        myGame.player1.moveRight()
       break;
      case 16://Q 81
      if(myGame.player1.bullets.length < 3){
        myGame.player1.bullets.push(new Bullet(canvas,myGame.player1.posX + 150, myGame.player1.posY,6,10,"lime"))
      }else{
        console.log('no puedes')
      }
      break;
      case 87: //up 38
        myGame.player2.moveUp()
        break;
      case 83: //down 40
        myGame.player2.moveDown()
        break;
      case 65://left 37
        myGame.player2.moveLeft()
        break;
      case 68://down 39
        myGame.player2.moveRight()
        break;
      case 81://shift 16
      if(myGame.player2.bullets.length < 3){
        myGame.player1.bullets.push(new Bullet(canvas,myGame.player2.posX + 150, myGame.player2.posY,6,10,"lime"))
      } else{
        return false
      }
        break;
      default:
          break;
    }
  });
}
function generateAsteroids(){
  var y = Math.floor((Math.random()*600)+600);
  var x = Math.floor((Math.random()*900)+100);
  asteroids.push(new Asteroids(canvas,x, y,10,10,150,100))
}
function putAsteroids(){
  if(frames % 100 === 0) generateAsteroids();
  asteroids.forEach(function(asteroid){
    asteroid.drawAsteroid();
  });
}