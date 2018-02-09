var canvas;
var myGame;
var fps = 20;
var frames = 0;
var interval;
$(document).ready(function(){
  $(".start-button").on("click", function(){
    $("canvas").css("display","block")
    $(".awesome-space").css("display","none")
    canvas = document.getElementById("space-board").getContext('2d');
    myGame = new Game (canvas);
    keyListenerPlayers();
    interval = setInterval(updateGame,1000/fps);
  });
});
function updateGame(){
  frames++;
  myGame.spaceBoard.clearSpaceBoard();
  myGame.spaceBoard.drawSpaceBoard();
  for(i=0; i<myGame.bullets.length; i ++){
    myGame.bullets[i].drawBullet()
    myGame.bullets[i].moveBullet()
  }
  //drawAsteroids();
  drawEnemies(); 
  playerAsteroids();
  playerEnemies();
  playerBigBoss();
  bulletAsteroids();
  bulletEnemies();
}

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
      if(myGame.bullets.length < myGame.player1.limitBullet){
        myGame.bullets.push(new Bullet(canvas,myGame.player1.posX + 150, myGame.player1.posY+(myGame.player1.height/2),25,5,"lime"))
        console.log(myGame.bullets)
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
        if(myGame.bullets2.length < myGame.player2.limitBullet2){
          myGame.bullets2.push(new Bullet(canvas,myGame.player2.posX + 150, myGame.player2.posY+(myGame.player1.height/2),6,5,"lime"))
        } 
        break;
      default:
          break;
    }
  });
}
function stopGame(){
  clearInterval(interval);
}
$(".reset-button").on("click", function(){
  
});