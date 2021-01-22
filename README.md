# \# Project's name



Chocobo Racing



## \## Description



Chocobo Racing is a multiplayer game and its object is to reach the finish line in the first place. The player must avoid colliding with other players.



## \## MVP (DOM - CANVAS)



Player needs to move forwards pressing a chosen key repeatedly to follow its path to the finish line. If two paths meet, players need to reduce or increase their speed to avoid collision with other players. If collision, still to decide(both go back to the start line or get stunned for X seconds). The game is over when a player reaches the finish line.



## \## Backlog



- Create single player mode
- Username registration and scoreboard
- Sounds and visual effects (when collides, looses or wins)



## \## Data structure



1. **index.html****
2. **style.css****
3. **main.js****
4. **game.js****
5. ***chocobo.js****



#### **1. index.html file**

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
- player
- youLose
- youWin
- racePosition
- score



**Methods:**

- start
- startLoop
- checkCollisions
- updateGameStats
- youLose
- youWin



#### 4. player.js file

**Properties:**

- ctx
- canvas
- x
- y
- image
- height
- width
- path
- speed



**Methods:**



- draw
- goForward
- didCollide
- stunPlayer
- setRandomPath



## \## States y States Transitions



Definition of the different states and their transition (transition functions)



######        3. splashScreen

-   \- Sets number of players

-   \- Sets number of races

-   \- Goes to gameScreen when start button is clickeD

  ###### 4. gameScreen

- countdown before running

-   \- race finishes when 1st player reaches the finish line

-   \- displays "next race" and updates page with new paths if there are more stages to be played.

-   \- goes to youWin/youLose if it's the last race

  ###### 3. youLose

-   \- shows final scores, you lose message and play again button

-   \- goes back to SplashScreen when play again button is clicked

  ###### 4. youWin

-   \- shows final scores, you win message and play again button

-   \- goes back to SplashScreen when play again button is clicked



## \## Task



- Create and connect files: main.js, player.js, obstacle.js,
- BuildDom in main.js
- Create 4 screens in main.js
- Create number of players / number of races options in main.js
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

[Link Deploy]()



### \### Slides



URls for the project presentation (slides)

[Link Slides.com](http://slides.com)