"use strict";

class Chocobo {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.name = "player1";
    this.x = 50; // depends on number of players
    this.y = 60; // depends on number of players
    this.size = 200;
    this.img.src = "/img/players/yellow1.png";
    this.key = "space bar";
    this.path = undefined; // randomized with Math.floor
    this.speed = undefined; // depends on clicks
  }

  drawSprite() {
    this.ctx.fillStyle = "#66D3FA";
    // this.ctx.fillRect(x, y, width, height);
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

    //WHEN FEELING READY TO TRY WITH IMG
    // let img = new Image(); // Create new img element
    // img.addEventListener(
    //   "load",
    //   (event) => {
    //     this.ctx.drawImage(img, this.x, this.y);
    //     img.src = "/img/players/yellow1.png";
    //   },
    //   false
    // );
    // Set source path
    // WHEN FEELING READY TO FIGHT WITH ANIMATING SPRITES AGAIN:
    // const canvasContainer = document.querySelector(".canvas-container");
    // const containerWidth = canvasContainer.clientWidth;
    // const containerHeight = canvasContainer.clientHeight;
    // this.canvas.setAttribute("height", containerHeight);
    // this.canvas.setAttribute("width", containerWidth);
    // const ch = this.canvas.height;
    // const cw = this.canvas.width;
    // let sprite = new Image();
    // sprite.src = this.img.src;
    // // Define the number of columns and rows in the sprite
    // let numColumns = 4;
    // let numRows = 1;
    // // Define the size of a frame
    // let frameWidth = sprite.width / numColumns;
    // let frameHeight = sprite.height / numRows;
    // // The sprite image frame starts from 0
    // let currentFrame = 0;
    // sprite.addEventListener(
    //   "load",
    //   (event) => {
    //     sprite.src = "/img/players/yellow.png";
    //     // Pick a new frame
    //     currentFrame++;
    //     // Make the frames loop
    //     let maxFrame = numColumns * numRows - 1;
    //     if (currentFrame > maxFrame) {
    //       currentFrame = 0;
    //     }
    //     // Update rows and columns
    //     let column = currentFrame % numColumns;
    //     let row = Math.floor(currentFrame / numColumns);
    //     // Clear and draw
    //     this.ctx.clearRect(0, 0, cw, ch);
    //     this.ctx.drawImage(sprite, 10, 30);
    //     this.ctx.drawImage(
    //       sprite,
    //       column * frameWidth,
    //       row * frameHeight,
    //       frameWidth,
    //       frameHeight,
    //       this.x,
    //       this.y,
    //       frameWidth,
    //       frameHeight
    //     );
    //     //Wait for next step in the loop
    //   },
    //   300
    // );
  }

  setRandomPath() {
    // to figure out
    // this.ctx.moveTo(this.x, this.y);
    // this.ctx.lineTo(Math.random() * width, Math.random() * height);
    // this.ctx.stroke();
  }

  goForward() {
    // event on key pressing
  }

  handleScreenCollision() {}
  didCollide(enemyChocobo) {}
  stunPlayer() {}
}

// class blackChocobo extends Chocobo {
//   constructor(ctx, canvas, size, img, path, speed)
//   super(ctx, canvas, size, img, path, speed)

// }
