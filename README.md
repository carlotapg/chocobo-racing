# Project's name

Chocobo Racing

## Description

Chocobo Racing is a multiplayer game and its object is to reach the finish line in the first place. The player must avoid colliding with other players.

## MVP (DOM - CANVAS)

Player needs to move forwards pressing a chosen key repeatedly to follow its path to the finish line. If two paths meet, players need to reduce or increase their speed to avoid collision with other players. If collision, still to decide(both go back to the start line or get stunned for X seconds). The game is over when a player reaches the finish line.

## Backlog

- Create single player mode
- Username registration and scoreboard
- Sounds and visual effects (when collides, looses or wins)

## Data structure

1. **index.html\*\***
2. **style.css\*\***
3. **main.js\*\***
4. **game.js\*\***
5. **player.js\*\***

#### 1. index.html file

#### 2. style.css file

#### 3. main.js file

- buidDom
- createSplashScreen/removeSplashScreen
- createGameScreen/removeGameScreen
- createYouLoseScreen/removeYouLoseScreen
- createYouWinScreen/removeYouWinScreen
- startGame/endGame

#### 4. game.js file

**Properties:**

- ctx
- canvas
- playersArr
- gameOver
- player1
- player2
- player3
- player4
- gameScreen

**Methods:**

- start
- startLoop
- checkCollisions
- updateGameStats
- gameisOver
- playSong

#### 4. player.js file

**Properties:**

- ctx
- canvas
- x
- y
- size
- imagSrc
- gifSrc
- key
- path
- boolean
- name

**Methods:**

- drawSprite
- updatePosition
- handleScreenCollision
- didCollide
- stunPlayer

## \## States y States Transitions

Definition of the different states and their transition (transition functions)

###### 3. splashScreen

- Sets number of players

- Goes to gameScreen when start button is clicked

###### 4. gameScreen

- displays players position in the race

- goes to Game Over screen when 1st player reaches the finish line

###### 3. gameOverScreen

- shows end of race message and play again button

- goes back to gameScreen when play again button is clicked

## \## Task

- Create and connect files: main.js, player.js, obstacle.js,
- BuildDom in main.js
- Create 4 screens in main.js
- Create number of players / number of circuits options in main.js
- Create popup to chose key in main.js
- Create screen transitions in main.js
- Create Game constructor
- Create loop in game.js
- Create Chocobo constructor
- Create randomized paths
- Move chocobo in game.js
- Check Collisions in game.js
- Check game result in game.js
- Add time and print it in game.js
- Create scoreboard in main.js
- Add audios, img and fonts

## \## Links

### \### Trello

[Link url](https://trello.com/b/sPXaCMbf/chocobo-project)

### \### Git

URls for the project repo and deploy

[Link Repo](https://github.com/carlotapg/chocobo-project)

[Link Deploy](https://carlotapg.github.io/chocobo-racing/)

### \### Slides

URls for the project presentation (slides)

[Link Slides.com](https://docs.google.com/presentation/d/1DVqHCAz5m_sXfCWX91AV72-g4ss9TylqMYXN9XACK38/edit?usp=sharing)
