function Game(canvas){
  this.spaceBoard = new Space(canvas,1300,500)
  this.player1 = new SpaceShip(canvas,30,150,15,10,80,90,);
  this.player2 = new SpaceShip(canvas,30,300,15,10,80,80,);
  this.asteroids = [];
  this.bullets = [];
  this.bullets2 = [];
  this.enemies = [];
  this.boss = new BigBoss(canvas,1200,50,2,2,350,350);
}