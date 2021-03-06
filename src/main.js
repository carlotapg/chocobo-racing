"use strict";

let splashScreen; // Start Game screen
let game;
let gameScreen; // store instance of the current Game
let gameOverScreen; // Game over

// helper function to create DOM elements
function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  const result = tempDiv.children[0];
  return result;
}

//splash screen
function createSplashScreen() {
  splashScreen = buildDom(`
  <main id="splash-body">
  <div id="instructions-container">
    <img src="img/logo.png" id="logo"/>
    <p> Press a given key as fast as possible </br>
    to be the first one to reach the finish line. </br>
    Keep your chocobo safe and avoid </br> colliding 
    with other players. </br>
    Careful, they're easily distracted </br>and may take unexpected paths.  </p>
      <div id="dropdown-container">
       <select id="dropdown-players">
       <option value="select" disabled selected hidden>Number of players</option>
       <option value="2">2 players</option>
         <option value="3">3 players</option>
         <option value="4">4 players</option>
       </select>
       <div id="button container">
       <button id="start-button">Start game</button>
    </div>
    </div>
       <div class="guide-container">
       <ul>
       <li>Player 1<img class="minis" src="img/players/yellow-chocobo.gif"> Press V</li>
       <li>Player 2<img class="minis" src="img/players/black-chocobo.gif"> Press A</li>
       <li>Player 3<img class="minis" src="img/players/red-chocobo.gif"> Press P</li>
       <li>Player 4<img class="minis" src="img/players/blue-chocobo.gif"> Press M</li>
       </div>
       
    </div>
    </main>
    
  `);

  document.body.appendChild(splashScreen);

  let numberOfPlayers = splashScreen.querySelector("#dropdown-players");
  let numberOfCircuits = splashScreen.querySelector("#dropdown-circuits");
  const startButton = splashScreen.querySelector("#start-button");

  //makes number of players/circuits mandatory before launching game screen

  startButton.addEventListener("click", function () {
    if (numberOfPlayers.selectedIndex === 0) {
      alert("Please select number of players");
    } else {
      startGame();
    }
  });
}
createSplashScreen();

function removeSplashScreen() {
  splashScreen.remove();
}

// game screen
function createGameScreen() {
  // generates random background every time the page is reloaded
  const backgroundArr = [
    "img/background/0.jpeg",
    "img/background/1.jpeg",
    "img/background/2.jpeg",
    "img/background/3.jpeg",
    "img/background/4.jpeg",
    "img/background/5.jpeg",
    "img/background/6.jpeg",
  ];

  let randomNum = Math.floor(Math.random() * backgroundArr.length);

  gameScreen = buildDom(`   
<div id="game-body">
<audio controls id="main-song">
  <source src="audio/song.mp3" type="audio/mpeg" autoplay>
</audio>
<div id="countdown">
</div>
<div class="position">
<span class="label">Positions:</br>
<p>1st:<span class="first"></span></br>
2nd:<span class="second"></span></br>
3rd:<span class="third"></span></br>
4th:<span class="fourth"></span></br>
</p>
    </span>
  </div>
 <main class="game-container" style="background-image: url(${backgroundArr[randomNum]});">
 <header>
</header>
  <div class="canvas-container">
    <canvas id="canvas" width="679" height="730"></canvas>
  </div>
</main>
</div>
`);
  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

// game over screen
function createGameOverScreen() {
  const winner = game.winner;

  gameOverScreen = buildDom(`
    <main class="game-over" width="auto" height="800">
    <audio controls id="win">
    <source src="audio/win.mp3" type="audio/mpeg" autoplay>
    </audio>
  <div id="stats-container">
        <h1 id="title">Race is over</h1>
        <span class="final-stats">And the winner is...</br>
        </br>
        <p><span id="go-first">${winner}</span></br>
        </br>
        <img class="minis" src="img/players/yellow-chocobo.gif">
        <img class="minis" src="img/players/black-chocobo.gif"> 
        <img class="minis" src="img/players/red-chocobo.gif"> 
        <img class="minis" src="img/players/blue-chocobo.gif"> 
        <!-- 2nd:<span id="go-second"></span></br>
        3rd:<span id="go-third"></span></br>
        4th:<span id="go-fourth"></span></br> -->
        </p>
        </span>
          <div class="text"></br>
        <p>  Well done runners!!! </br>
           Don't forget to pet your chocobos </br>
          and feed them  some treats. </br> 
          Ready for the next one?</p>
          </div>
      <button class="restart-button">Play again</button>
     
      </div>
  	</main>
  `);

  document.body.appendChild(gameOverScreen);
  const restartButton = gameOverScreen.querySelector("button");
  restartButton.addEventListener("click", startGame);
}

// Game over screen
function removeGameOverScreen() {
  gameOverScreen.remove();
}

// setting the game state

function startGame() {
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  removeSplashScreen();
  createGameScreen();

  game = new Game();
  game.gameScreen = gameScreen;

  // Start the game ...
  game.start();
}
function endGame() {
  removeGameScreen();
  createGameOverScreen();
}
