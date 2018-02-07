var canvas;
var myGame;
var fps = 30;
var frames = 0;
var interval;
$(document).ready(function(){
  $(".start-button").on("click", function(){
    canvas = document.getElementById("space-board").getContext('2d');
    myGame = new Game (canvas);
    keyListenerPlayers();
    interval = setInterval(updateGame,1000/fps);
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
      if(myGame.bullets.length < 3){
        myGame.bullets.push(new Bullet(canvas,myGame.player1.posX + 150, myGame.player1.posY,6,10,"lime"))
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
      if(myGame.bullets2.length < 3){
        myGame.bullets2.push(new Bullet(canvas,myGame.player2.posX + 150, myGame.player2.posY,6,10,"lime"))
      } else{
        return false
      }
        break;
      default:
          break;
    }
  });
}
function updateGame(){
  frames++;
  myGame.spaceBoard.clearSpaceBoard();
  myGame.spaceBoard.drawSpaceBoard();
  for(i=0; i<myGame.bullets.length; i ++){
    myGame.bullets[i].drawBullet()
    myGame.bullets[i].moveBullet()
  }
  checkIfCrash();
  checkIfBulletCrash();
  checkIfEnemiesCrash();
  putAsteroids();
  putEnemies();
}
function generateAsteroids(){
  var y = Math.floor((Math.random()*420)+0);
  var x = 1300
  myGame.asteroids.push(new Asteroids(canvas,x, y,5,5,100,80))
}
function putAsteroids(){
  if(frames % 100 === 0) generateAsteroids();
  myGame.asteroids.forEach(function(asteroid){
    asteroid.drawAsteroid();
  });
}
function generateEnemies(){
  var y = Math.floor((Math.random()*420)+0);
  var x = 1300
  myGame.enemies.push(new Enemies(canvas,x, y,8,8,100,80))
}
function putEnemies(){
  if(frames % 100 === 0) generateEnemies();
  myGame.enemies.forEach(function(enemie){
    enemie.drawEnemies();
  });
}
function checkIfCrash(){
  myGame.asteroids.forEach(function(asteroid){
    if(myGame.player1.crashWith(asteroid)){
      console.log("chocaste hijoeputa")
      stopGame();
    }
  });
  //Misma funcion pero con ciclo for.
  // for(j=0; j<myGame.asteroids.length; j++){
  //   if ( myGame.player1.crashWith(myGame.asteroids[j])) {
  //     myGame.asteroids.pop();
  //   }
}
function checkIfBulletCrash(){
//La misma función se puede hacer con cliclos for anidados
//   for(j=0; j<myGame.asteroids.length; j++){
//    for(i=0; i<myGame.bullets.length; i++){
//      if (myGame.bullets[i].crashWith(myGame.asteroids[j])) {
//       console.log("Me mamo la verga")
//       myGame.bullets.indexOf([i])
//       }   
//     }
//   }  
 
// }
    myGame.asteroids.forEach(function(asteroid){
    myGame.bullets.forEach(function(bullet){
      if(bullet.crashWith(asteroid)){
        console.log("({})")
      // var index = myGame.bullets.indexOf(bullet)
      //   myGame.bullets.splice(index,1)
      // var i = myGame.asteroids.indexOf(asteroid)
      //   myGame.asteroids.splice(i,1)
      }
    })
})
}
function checkIfEnemiesCrash(){
  myGame.enemies.forEach(function(enemie){
    myGame.bullets.forEach(function(bullet){
      if(bullet.crashWith(enemie)){
        console.log("({})")
      var j = myGame.bullets.indexOf(bullet)
        myGame.bullets.splice(j,1)
      var z = myGame.enemies.indexOf(enemie)
        myGame.enemies.splice(z,1)
      }
    })
})
}
function stopGame(){
  clearInterval(interval);
}
