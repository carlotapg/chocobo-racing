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
    this.playerPosition = undefined; // 1st,2nd, 3rd
    this.playerScore = 0;
    this.gameScreen = undefined;
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
      "space bar",
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
      if (event.key == " ") {
        if (this.player1.boolean === false) {
          this.player1.updatePosition();
          this.player1.boolean = true;
        }
      }
      if (event.key == "a") {
        if (this.player2.boolean === false) {
          this.player2.updatePosition();
          this.player2.boolean = true;
        }
      }
      if (event.key == "p") {
        if (this.player3.boolean === false) {
          this.player3.updatePosition();
          this.player3.boolean = true;
        }
      }
      if (event.key == "m") {
        if (this.player4.boolean === false) {
          this.player4.updatePosition();
          this.player4.boolean = true;
        }
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.key == " ") {
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

    // set path
    // this.playersArr.forEach((element) => element.setRandomPath());
    //start the loop w/ requestAnimationFrame
    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      this.playersArr.forEach((element) => element.drawSprite());

      // 1. UPDATE PLAYER STATS
      // 1.1 Check Collisions

      // 1.2 update the players

      //2. CLEAR CANVAS

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

  /// TO CONSULT ABOUT PLAYERSARR, THIS PROBABLY WONT WORK
  checkCollisions() {
    this.playersArr.forEach(function (player) {
      if (player.didCollide() === true) {
        // to put some sound / animation / stun seconds
        player.y = 0;
        player.setRandomPath();
      }
    });
  }
  updateGameStats() {}

  gameIsOver() {
    //WORKING
    this.playersArr.forEach((player) => {
      if (player.y === 700) {
        this.gameOver = true;
      }
    });

    // this.circuitsLeft = Number(
    //   splashScreen.querySelector("#dropdown-circuits").value
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
    //   // show the end game screen
    // });
  }
}
