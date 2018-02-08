function Space (canvas,width,height){
  this.width = width;
  this.height = height;
  this.ctx = canvas;
  this.img = new Image();
  this.img.src = "images/spaceBoard.gif";
  this.img.addEventListener("load",this.drawSpaceBoard.bind(this));
}
Space.prototype.drawSpaceBoard = function(){
  this.ctx.drawImage(this.img, 0, 0, this.width, this.height)
  myGame.player1.drawSpaceShip();
  myGame.player1.playerLives();
  myGame.player1.playerScore();
}
Space.prototype.clearSpaceBoard = function(){
  this.ctx.clearRect(0,0,this.width,this.height)
}

