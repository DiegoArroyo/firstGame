function Game(canvas){
  this.spaceBoard = new Space(canvas,1300,500)
  this.player1 = new SpaceShip(canvas,30,300,50,50,150,100,);
  this.asteroids = [];
  this.bullets = [];
  this.bullets2 = [];
  this.enemies = [];
  this.boss = [];
}