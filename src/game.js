class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.playersArr = [];
    this.gameOver = false;
    this.player1 = undefined;
    this.player2 = undefined;
    this.player3 = undefined;
    this.player4 = undefined;
    this.circuitsLeft = undefined;
    this.gameScreen = undefined;
    this.first = undefined;
    this.second = undefined;
    this.third = undefined;
    this.fourth = undefined;
  }

  start() {
    //canvas and its dimensions
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

    // creates players
    this.player1 = new Player(
      this.canvas,
      this.ctx,
      this.canvas.width / 2,
      0,
      50,
      "/img/players/yellow1.png",
      "v",
      undefined,
      false
    );
    this.player2 = new BlackPlayer(
      this.canvas,
      this.ctx,
      this.canvas.width / 2 - 250,
      0,
      50,
      "/img/players/black1.png",
      "a",
      undefined,
      false
    );

    this.player3 = new RedPlayer(
      this.canvas,
      this.ctx,
      this.canvas.width / 2 - 250,
      0,
      50,
      "/img/players/red1.png",
      "p",
      undefined,
      false
    );

    this.player4 = new BluePlayer(
      this.canvas,
      this.ctx,
      this.canvas.width / 2 + 125,
      0,
      50,
      "/img/players/blue1.png",
      "m",
      undefined,
      false
    );

    // pushes players to playersArr depending on number of players selected
    let numberOfPlayers = splashScreen.querySelector("#dropdown-players");

    if (numberOfPlayers.selectedIndex === 2) {
      this.playersArr.push(this.player1, this.player2, this.player3);
    } else if (numberOfPlayers.selectedIndex === 3) {
      this.playersArr.push(
        this.player1,
        this.player2,
        this.player3,
        this.player4
      );
    } else if (numberOfPlayers.selectedIndex === 1) {
      this.playersArr.push(this.player1, this.player2);
    }

    //add event listeners

    //key down
    window.addEventListener("keydown", (event) => {
      if (event.key == "v") {
        if (this.player1.boolean === false) {
          this.player1.updatePosition();
          this.checkCollisions(this.player1);
          this.player1.boolean = true;
        }
      }
      if (event.key == "a") {
        if (this.player2.boolean === false) {
          this.player2.updatePosition();
          this.checkCollisions(this.player2);
          this.player2.boolean = true;
        }
      }
      if (event.key == "p") {
        if (this.player3.boolean === false) {
          this.player3.updatePosition();
          this.checkCollisions(this.player3);
          this.player3.boolean = true;
        }
      }
      if (event.key == "m") {
        if (this.player4.boolean === false) {
          this.player4.updatePosition();
          this.checkCollisions(this.player4);
          this.player4.boolean = true;
        }
      }
    });
    // needs a key up to be able to press key again
    window.addEventListener("keyup", (event) => {
      if (event.key == "v") {
        this.player1.boolean = false;
      }
      if (event.key == "a") {
        this.player2.boolean = false;
      }

      if (event.key == "p") {
        this.player3.boolean = false;
      }

      if (event.key == "m") {
        this.player4.boolean = false;
      }
    });

    //start the loop w/ requestAnimationFrame
    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      this.playersArr.forEach((element) => element.drawSprite());

      // 1. UPDATE PLAYER STATS
      // 1.1 Check Player Collisions
      //
      this.updateGameStats();
      // 1.1 Check Screen Collision
      this.playersArr.forEach((element) => element.handleScreenCollision());

      // 1.2 update the players

      this.playersArr.forEach((element) => this.checkCollisions(element));

      //
      //check if game is over
      this.gameIsOver();
      // Draws selected number of players

      //4. REPEAT
      if (!this.gameOver) {
        window.requestAnimationFrame(loop);
      } else endGame();
    }.bind(this); //can use arrow function instead
    //initial call = starts recursion
    window.requestAnimationFrame(loop);
  }

  checkCollisions(eachPlayer) {
    // LOSERS CHOICE
    // let newArr = JSON.parse(JSON.stringify(this.playersArr)).splice(index);
    // if (this.player1.didCollide(this.player2)) bl bls bls
    //  NOT WORKING
    let newArr = [...this.playersArr].filter(
      (chocobo) => chocobo !== eachPlayer
    );
    console.log(newArr);
    newArr.forEach((enemy) => {
      if (enemy.didCollide(eachPlayer) === true) {
        // to put some sound / animation / stun seconds
        player.stunPlayer();
      }
      // didCollide(otherPlayer)
    });
  }

  updateGameStats() {
    let yPosition = [
      this.player1.y,
      this.player2.y,
      this.player3.y,
      this.player4.y,
    ];
    // sorts the players array in descending order
    let sortedArr = yPosition.sort(function (a, b) {
      return b - a;
    });
    sortedArr[0];
    sortedArr[1];
    sortedArr[2];
    sortedArr[3];
  }

  gameIsOver() {
    //WORKING
    this.playersArr.forEach((player) => {
      if (player.y >= 700) {
        this.gameOver = true;
      }
    });
    //NOT WORKING
    // this.circuitsLeft = Number(
    //   splashScreen.querySelector("#dropdown-circuits").value
    // );

    // this.playersArr.forEach((player) => {
    //   while (this.circuitsLeft === 0) {
    //     if (player.y === 700) {
    //       this.circuitsLeft--;
    //       gameScreen.remove();
    //       createGameScreen();
    //     }

    //     if (this.circuitsLeft === 0) {
    //       this.gameOver = true;
    //     }
    //   }
    // });
    //NOT WORKING
    // this.circuitsLeft = Number(
    //   splashScreen.querySelector("#dropdown-circuits").value);
    // );
    // console.log(this.circuitsLeft);
    // this.playersArr.forEach((player) => {
    //   if (this.circuitsLeft === 0) {
    //     this.GameOver = true;
    //   }
    //   if (player.y === 700) {
    //     this.circuitsLeft--;
    //     removeGameScreen();
    //     createGameScreen();
    //   }
    //
    // });
  }
}
