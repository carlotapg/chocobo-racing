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

    //saves reference to position
    this.firstPosition = document.querySelector(".label .first");
    this.secondPosition = document.querySelector(".label .second");
    this.thirdPosition = document.querySelector(".label .third");
    this.fourthPosition = document.querySelector(".label .fourth");

    // final position

    // creates players
    this.player1 = new Player(
      this.canvas,
      this.ctx,
      this.canvas.width / 2,
      0,
      50,
      "img/players/yellow1.png",
      "img/players/yellow-chocobo.gif",
      "v",
      undefined,
      false,
      "Player 1"
    );
    this.player2 = new BlackPlayer(
      this.canvas,
      this.ctx,
      this.canvas.width / 2 - 250,
      0,
      50,
      "img/players/black1.png",
      "img/players/black-chocobo.gif",
      "a",
      undefined,
      false,
      "Player 2"
    );

    this.player3 = new RedPlayer(
      this.canvas,
      this.ctx,
      this.canvas.width / 2 - 250,
      0,
      50,
      "img/players/red1.png",
      "img/players/red-chocobo.gif",
      "p",
      undefined,
      false,
      "Player 3"
    );

    this.player4 = new BluePlayer(
      this.canvas,
      this.ctx,
      this.canvas.width / 2 + 125,
      0,
      50,
      "img/players/blue1.png",
      "img/players/red-chocobo.gif",
      "m",
      undefined,
      false,
      "Player 4"
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

    this.playSong();

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
      this.playWinSound();
    }.bind(this); //can use arrow function instead
    //initial call = starts recursion
    window.requestAnimationFrame(loop);
  }

  checkCollisions(eachPlayer) {
    let newArr = [...this.playersArr].filter(
      (chocobo) => chocobo !== eachPlayer
    );

    newArr.forEach((enemy) => {
      if (enemy.didCollide(eachPlayer) === true) {
        // to put some sound / animation / stun seconds
        player.stunPlayer();
      }
    });
  }

  updateGameStats() {
    let yPosition = [this.player1, this.player2, this.player3, this.player4];
    // sorts the players array in descending order
    let sortedArr = yPosition.sort(function (a, b) {
      return b.y - a.y;
    });
    // ????
    let numberOfPlayers = splashScreen.querySelector("#dropdown-players");

    if (numberOfPlayers.selectedIndex === 2) {
      this.firstPosition.textContent = sortedArr[0].name;
      this.secondPosition.textContent = sortedArr[1].name;
      this.thirdPosition.textContent = sortedArr[2].name;
    } else if (numberOfPlayers.selectedIndex === 3) {
      this.firstPosition.textContent = sortedArr[0].name;
      this.secondPosition.textContent = sortedArr[1].name;
      this.thirdPosition.textContent = sortedArr[2].name;
      this.fourthPosition.textContent = sortedArr[3].name;
    } else if (numberOfPlayers.selectedIndex === 1) {
      this.firstPosition.textContent = sortedArr[0].name;

      this.secondPosition.textContent = sortedArr[1].name;
    }

    // Get the string data  from localStorage
    // Convert it to an array

    this.newScore1 = sortedArr[0].name;
    this.newScore2 = sortedArr[1].name;
    this.newScore3 = sortedArr[2].name;
    this.newScore4 = sortedArr[3].name;

    // function saveScore(name) {
    //   // Add new score to the array
    //   if (!scoreStr) {
    //     let scoreArr = [];
    //     scoreArr.push(newScore1, newScore2, newScore3, newScore4);
    //   } else if (scoreStr) {
    //     scoreArr = JSON.parse(newScore1, newScore2, newScore3, newScore4);
    //     scoreArr.push(newScore1, newScore2, newScore3, newScore4);
    //   }

    //   // Stringify the updated score array
    //   const updatedScoreStr = JSON.stringify(scoreArr);
    //   // Store back the updated array string
    //   localStorage.setItem("score", updatedScoreStr);
    // }

    // function getScores() {
    //   const scoreStr = localStorage.getItem("score");
    //   // Add new score to the array
    //   if (!scoreStr) {
    //     let scoreArr = [];
    //   } else if (scoreStr) {
    //     scoreArr = JSON.parse(scoreStr);
    //   }

    //   return scoreArr;
    // }

    // saveScore('Uros', 1234);

    // const v = getScores();
    // console.log("v", v);

    // ------------------------------------------------------------------------------
    // showFinalStats(){
    //   this.updateGameStats();

    // this.first.textContent = sortedArr[0].name; // + `<img src=${sortedArr[0].gifSrc}</img>`;
    // this.second.textContent = sortedArr[1].name; //+ `<img src=${sortedArr[1].gifSrc}</img>`;
    // this.third.textContent = sortedArr[2].name; //+ `<img src=${sortedArr[2].gifSrc}</img>`;
    // this.fourth.textContent = sortedArr[3].name; //+ `<img src=${sortedArr[3].gifSrc}</img>`;
    console.log(this.first);
    console.log(this.second);
    // }
    //final stats:

    //   if (numberOfPlayers.selectedIndex === 2) {
    //     this.firstPosition.textContent = sortedArr[0].name + sortedArr[0].gifSrc;
    //     this.secondPosition.textContent = sortedArr[1].name + sortedArr[1].gifSrc;
    //     this.thirdPosition.textContent = sortedArr[2].name + sortedArr[2].gifSrc;
    //   } else if (numberOfPlayers.selectedIndex === 3) {
    //     this.firstPosition.textContent = sortedArr[0].name + sortedArr[0].gifSrc;
    //     this.secondPosition.textContent = sortedArr[1].name + sortedArr[1].gifSrc;
    //     this.thirdPosition.textContent = sortedArr[2].name + sortedArr[2].gifSrc;
    //     this.fourthPosition.textContent = sortedArr[3].name + sortedArr[2].gifSrc;
    //   } else if (numberOfPlayers.selectedIndex === 1) {
    //     this.firstPosition.textContent = sortedArr[0].name + sortedArr[0].gifSrc;
    //     this.secondPosition.textContent = sortedArr[1].name + sortedArr[1].gifSrc;
    //
  }

  gameIsOver() {
    //WORKING
    this.playersArr.forEach((player) => {
      if (player.y >= 700) {
        this.gameOver = true;
      }
    });
  }

  playSong() {
    const audioElement = document.querySelector("#main-song");
    audioElement.currentTime = 0;
    audioElement.play();
  }
  playWinSound() {
    const audioElement = document.querySelector("#win");
    audioElement.currentTime = 0;
    audioElement.play();
  }
}
