function Space (canvas,width,height){
  this.width = width;
  this.height = height;
  this.ctx = canvas;
  this.image = new Image();
  this.image.src = "images/spaceBoard.gif";
  this.image.addEventListener("load",this.drawSpaceBoard.bind(this));
  this.enemies = [];
}
//funcion que dibuja el espacio de juego y despliega el background
Space.prototype.drawSpaceBoard = function(){
  this.ctx.drawImage(this.image, 0, 0, this.width, this.height)
  myGame.player1.drawSpaceShip();
}
//funcion que reincia el espacio de juego y vuelve a dibujar el espacio
Space.prototype.clearSpaceBoard = function(){
  this.ctx.clearRect(0,0,this.width,this.height)
}

