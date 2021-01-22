"use strict";

class Game {
  constructor() {
    this.ctx = undefined;
    this.canvas = undefined;
    this.player = undefined;
    this.playersArr = [];
    this.youLose = undefined;
    this.youWin = undefined;
    this.playerPosition = undefined; // 1st,2nd, 3rd
    this.playerScore = 0;
    this.gameScreen = undefined;
  }

  start() {
    //creates canvas
    const canvasContainer = document.querySelector(".canvas-container");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    const containerWidth = canvasContainer.clientWidth;
    const containerHeight = canvasContainer.clientHeight;
    this.canvas.setAttribute("height", containerHeight);
    this.canvas.setAttribute("width", containerWidth);
    //saves reference to score
    this.playerScore = document.querySelector(".score .value");
    //saves reference to position
    this.playerPosition = document.querySelector(".position .value");

    //create new players
    this.player = new Chocobo();
    this.player.draw();

    //add event listeners
    //start the loop w/ requestAnimationFrame
    this.startLoop();
  }
  createNewChocobo() {
    // to figure out
    let newChocobo = new Chocobo();
    switch (this.playersArr.length) {
      case 2:
        for (let i = 0; i < this.playersArr.length; i++) {
          let p1 = new Chocobo(unit * 6, unit * 6, "#75A4FF");
          let p2 = new Chocobo(unit * 43, unit * 43, "#FF5050");
          ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
  }

  // TO FIGUE OUT
  //   if
  //   let p1 = new Player(unit * 6, unit * 6, '#75A4FF');
  //   let p2 = new Player(unit * 43, unit * 43, '#FF5050');
  //   ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

  startLoop() {}
  checkCollisions() {}
  updateGameStats() {}
  youLose() {}
  youWin() {}
}
