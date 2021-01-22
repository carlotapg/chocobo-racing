"use strict";

let splashScreen; // Start Game screen
let game;
let gameScreen; // store instance of the current Game
let youLoseScreen; //Game Over screen
let youWinScreen; // Winner screen

// helper function to create DOM elements
function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  const result = tempDiv.children[0];
  return result;
}
// example using function buildDom(htmlString)
// // const element = buildDom(`
// <section>
//     <p></p>
//     <a></a>
// </section>
// `);
console.log("helloooooo");

//splash screen
function createSplashScreen() {
  splashScreen = buildDom(`
  <main>
  <img src="" />
  <div id="instructions-container">
    <h1> Chocobo racing </h1>
    <p> instructions</p>
</div >
    <div id="buttons-container">
      <div id="dropdown-container">
       <select id="dropdown-players">
       <option value="" disabled selected hidden>Number of players</option>
       <option>2 players</option>
         <option>3 players</option>
         <option>4 players</option>
       </select>
       <select id="dropdown-circuits" placeholder="number of circuits">
       <option value="" disabled selected hidden>Number of circuits</option>
       <option>1</option>
         <option>2</option>
         <option>3</option>
       </select>
       <button id="start-button">Start game</button>
       </div>
    </div>
    </main>
    
  `);
  document.body.appendChild(splashScreen);

  // TO CONTINUE
  let playersButton = splashScreen.querySelector("#dropdown-players");
  let circuitsButton = splashScreen.querySelector("#dropdown-circuits");

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", function () {
    removeSplashScreen();
    createGameScreen();
  });
}

createSplashScreen();

function removeSplashScreen() {
  splashScreen.remove();
}

// game screen
function createGameScreen() {
  gameScreen = buildDom(`   
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
    <canvas></canvas>
  </div>
</main>
`);
  document.body.appendChild(gameScreen);
  return gameScreen;
}
function removeGameScreen() {
  gameScreen.remove();
}

// game over screen
function createYouLoseScreen() {
  youLoseScreen = buildDom(`
    <main>
        <h1>Game Over</h1>
        <p>Your position: <span></span></p>
          <p>Your score: <span></span></p>
          <p> YOU LOSE MESSAGE</p>
  		<button class="restart-button">Restart</button>
  	</main>
  `);
  document.body.appendChild(youLoseScreen);
  const restartButton = youLoseScreen.querySelector("button");
  restartButton.addEventListener("click", startGame);
}
function removeYouLoseScreen() {
  youLoseScreen.remove();
}

// winner screen
function createYouWinScreen() {
  youWinScreen = buildDom(`
    <main>
        <h1>Chocovictory!!!</h1>
        <p>Your position: <span></span></p>
          <p>Your score: <span></span></p>
          <p>Congrats! You are the winner of this race!</br>
          Dare to try again?</p>
  		<button class="restart-button">Restart</button>
  	</main>
  `);
  document.body.appendChild(youWinScreen);
  const restartButton = youWinScreen.querySelector("button");
  restartButton.addEventListener("click", startGame);
}
function removeYouWinScreen() {
  youWinScreen.remove();
}

// setting the game state

function startGame() {
  if (youLoseScreen) {
    removeYouLoseScreen();
  }
  if (youWinScreen) {
    removeYouWinScreen();
  }
  removeSplashScreen();
  createGameScreen();
  game = new Game();
  game.gameScreen = gameScreen;

  //start the game
  game.start();
}
function endGame() {
  if ((playerPosition = 1)) {
    // to figure out, must be a chocobo caracteristic)
    gameScreen.remove();
    createyouWinScreen();
  } else {
    gameScreen.remove();
    createyouLoseScreen();
  }
}
