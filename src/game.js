class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.playersArr = [];
    this.gameOver = this.youLose || this.youWin;
    this.youLose = undefined;
    this.youWin = undefined;
    this.player1 = undefined;
    this.player2 = undefined;
    this.player3 = undefined;
    this.player4 = undefined;
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
      undefined
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
      undefined
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
      undefined
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
      undefined
    );

    // pushes players to playersArr depending on number of players selected
    const startButton = splashScreen.querySelector("#start-button");
    let numberOfPlayers = splashScreen.querySelector("#dropdown-players");
    let value = numberOfPlayers.value;

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
    this.playersArr.forEach((element) => {

        document.addEventListener('keydown', function(element.key){
            y++
        });

    });

    // Add event listener for moving the player
    window.addEventListener("keydown", this.handleKeyDown);
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
      // Draws selected number of players
      this.playersArr.forEach((element) => element.drawSprite());

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
