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
  <img src="" />
  <div id="instructions-container">
    <img src="/img/logo.png" id="logo"/>
    <p> Press a given key as fast as possible </br>
    to be the first one to reach the finish line. </br>
    Keep your chocobo safe and avoid </br> colliding 
    with other players</p>
    <div id="buttons-container">
      <div id="dropdown-container">
       <select id="dropdown-players">
       <option value="select" disabled selected hidden>Number of players</option>
       <option value="2">2 players</option>
         <option value="3">3 players</option>
         <option value="4">4 players</option>
       </select>
       <select id="dropdown-circuits" placeholder="number of circuits">
         <option value="select" disabled selected hidden>Number of circuits</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select>
       </div>
       <button id="start-button">Start game</button>
    </div>
    </div>
    </main>
    
  `);

  document.body.appendChild(splashScreen);

  let numberOfPlayers = splashScreen.querySelector("#dropdown-players");
  let numberOfCircuits = splashScreen.querySelector("#dropdown-circuits");
  const startButton = splashScreen.querySelector("#start-button");

  //DELETE WHEN GAME SCREEN DONE
  // startButton.addEventListener("click", startGame);

  // UNCOMMENT WHEN GAME SCREEN DONE
  //makes number of players/circuits mandatory before launching game screen

  startButton.addEventListener("click", function () {
    if (
      numberOfPlayers.selectedIndex === 0 ||
      numberOfCircuits.selectedIndex === 0
    ) {
      alert("Please select number of players and circuits");
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
  gameScreen = buildDom(`   
<div id="game-body">
 <main class="game-container">
 <header>
  <div class="position">
    <span class="label">Position:</span>
    <span class="value"></span>
  </div>
  <div class="score">
      <span class="label">Score:</span>
      <span class="value"></span>
  </div>
</header>
  <div class="canvas-container">
    <canvas id="canvas" width="679" height="690"></canvas>
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
  gameOverScreen = buildDom(`
    <main class="game-over" width="auto" height="800">
        <h1>Race is over</h1>
        <p>Final positions: <span></span></p>
          <p><span></span></p>
          <p>Well done racers!!! </br>
           Don't forget to pet your chocobos </br> 
          and feed them some treats </br>
          Ready for the next one?</p>
  		<button class="restart-button">Restart</button>
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
