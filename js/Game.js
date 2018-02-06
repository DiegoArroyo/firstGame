function Game(canvas){
  this.spaceBoard = new Space(canvas,1350,600)
  this.player1 = new SpaceShip(canvas,30,300,50,50,150,100,);
}