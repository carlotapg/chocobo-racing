"use strict";

class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.playersArr = [player1, player2];
    this.gameOver = this.youLose || this.youWin;
    this.youLose = undefined;
    this.youWin = undefined;
    this.playerPosition = undefined; // 1st,2nd, 3rd
    this.playerScore = 0;
    this.gameScreen = undefined;
  }

  start() {
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

    //create new players IF STATEMENT /NUMBER PLAYERS GOES HERE?
    createNewChocobo = () => {
      let numberOfPlayers = splashScreen.querySelector(
        "#dropdown-players .value"
      );
      if (numberOfPlayers === "3") {
        this.playersArr.push(player3);
      } else if (numberOfPlayers === "4")
        this.playersArr.push(player3, player4);

      // switch (this.playersArr.length) {
      //   case 2:
      //     // TO FIGURE OUT HOW TO
      //     //  constructor(canvas, src, x, y, image, key)
      //     for (let i = 0; i < this.playersArr.length; i++) {
      //       player1 = Chocobo;
      //       player2 = new Chocobo(this.canvas, unit * 43, "#FF5050");
      //       ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      //     }
      // }
    };

    this.player = new Chocobo(this.canvas);
    this.player.drawSprite();

    //add event listeners
    //start the loop w/ requestAnimationFrame
    this.startLoop();
  }
  startLoop() {
    const loop = function () {
      // 1. UPDATE PLAYER
      // Check Collisions

      //update the players

      //2. CLEAR CANVAS

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //3. DRAW - UPDATE CANVAS
      // Draw player
      this.player.drawSprite();
      //4. REPEAT
      if (!this.gameOver) {
        window.requestAnimationFrame(loop);
      }
    }.bind(this); //can use arrow function instead
    //initial call = starts recursion
    loop();
  }
  checkCollisions() {}
  updateGameStats() {}
  youLose() {}
  youWin() {}
}
