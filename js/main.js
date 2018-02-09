var canvas;
var myGame;
var fps = 20;
var frames = 0;
var interval;
var music = new Audio();
$(document).ready(function(){
  $(".start-button").on("click", function(){
    $("canvas").css("display","block")
    $(".awesome-space").css("display","none")
    canvas = document.getElementById("space-board").getContext('2d');
    myGame = new Game (canvas);
    keyListenerPlayers();
    music.src ="battle1_1.ogg";
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
  for(j=0; j<myGame.bullets2.length; j ++){
    myGame.bullets2[j].drawBullet()
    myGame.bullets2[j].moveBullet()
  }
  drawAsteroids();
  drawEnemies(); 
  myGame.boss.drawBigBoss();
  myGame.boss.BigBossData();
  playerAsteroids();
  playerEnemies();
  playerBigBoss();
  bulletAsteroids();
  bulletEnemies();
  bulletBigBoss();
  noLives(); 
}

//Funcion para los eventos del tablero
function keyListenerPlayers(){
  document.addEventListener("keydown", function(e){
    switch (e.keyCode) {
      case 38: //UP 38
        myGame.player1.moveUp()               
        break;
      case 40: //DOWN 40 
        myGame.player1.moveDown()
        break;
      case 37://LEFT 37 
        myGame.player1.moveLeft()
        break;
      case 39://RIGHT 39
        myGame.player1.moveRight()
       break;
      case 16://SHIFT 16
      if(myGame.bullets.length < myGame.player1.limitBullet){
        myGame.bullets.push(new Bullet(canvas,myGame.player1.posX + 150, myGame.player1.posY+(myGame.player1.height/2),25,5,"lime"))
        console.log(myGame.bullets)
      }
      break;
      case 87: //W 87
        myGame.player2.moveUp()
        break;
      case 83: //S 83
        myGame.player2.moveDown()
        break;
      case 65://A 65
        myGame.player2.moveLeft()
        break;
      case 68://D 68
        myGame.player2.moveRight()
        break;
      case 81://Q 81
        if(myGame.bullets2.length < myGame.player2.limitBullet2){
          myGame.bullets2.push(new Bullet(canvas,myGame.player2.posX + 150, myGame.player2.posY+(myGame.player2.height/2),25,5,"purple"))
          console.log(myGame.bullets2)
        } 
        break;
      default:
          break;
    }
  });
}
function noLives (){
  if(myGame.player1.lives === 0 || myGame.player2.lives2 === 0){
  myGame.spaceBoard.ctx.font = "100px Arial";
  myGame.spaceBoard.ctx.fillStyle = "lime";
  myGame.spaceBoard.ctx.strokeStyle = "black";
  myGame.spaceBoard.ctx.fillText("GAME OVER", 330,480);
  myGame.spaceBoard.ctx.strokeText("GAME OVER", 330,480);
  myGame.spaceBoard.ctx.font = "20px Arial";
  myGame.spaceBoard.ctx.fillStyle = "white";
  myGame.spaceBoard.ctx.strokeStyle = "black";
  myGame.spaceBoard.ctx.fillText("Click RESET GAME", 950,480);
  stopGame();
  }
  if(myGame.boss.life === 0){
  myGame.spaceBoard.ctx.font = "100px Arial";
  myGame.spaceBoard.ctx.fillStyle = "lime";
  myGame.spaceBoard.ctx.strokeStyle = "black";
  myGame.spaceBoard.ctx.fillText("YOU WIN", 400,480);
  myGame.spaceBoard.ctx.strokeText("YOU WIN", 400,480);
  myGame.spaceBoard.ctx.font = "20px Arial";
  myGame.spaceBoard.ctx.fillStyle = "white";
  myGame.spaceBoard.ctx.strokeStyle = "black";
  myGame.spaceBoard.ctx.fillText("Click RESET GAME", 750,480);
  stopGame();
  }
}
function stopGame(){
  clearInterval(interval);
}
$(".reset-button").on("click", function(){
  
});