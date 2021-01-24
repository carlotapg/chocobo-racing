"use strict";

class Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2; // depends on number of players
    this.y = 0; // depends on number of players
    this.size = 50;
    this.imgSrc = "/img/players/yellow1.png";
    this.key = "space bar";
    this.path = undefined; // randomized with Math.floor
    this.speed = undefined; // depends on clicks
  }

  drawSprite() {
    let img = new Image();
    img.addEventListener(
      "load",
      (event) => {
        this.ctx.drawImage(
          img,
          this.x,
          this.y,
          img.width / 1.75,
          img.height / 1.75
        );
      },
      false
    );
    img.src = this.imgSrc;

    // WHEN FEELING READY TO FIGHT WITH ANIMATING SPRITES AGAIN:
    // Define the number of columns and rows in the sprite
    // let numColumns = 4;
    // let numRows = 1;
    // const ch = this.canvas.height;
    // const cw = this.canvas.width;
    // // Define the size of a frame
    // let frameWidth = this.img.width / numColumns;
    // let frameHeight = this.img.height / numRows;
    // // The sprite image frame starts from 0
    // let currentFrame = 0;
    // this.img.addEventListener(
    //   "load",
    //   (event) => {
    //     this.img.src;
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
    //     this.ctx.drawImage(this.img, 30, 30);
    //     this.ctx.drawImage(
    //       this.img,
    //       column * frameWidth,
    //       row * frameHeight,
    //       frameWidth,
    //       frameHeight,
    //       this.x,
    //       this.y,
    //       frameWidth,
    //       frameHeight
    //     );
    //     window.requestAnimationFrame(this.ctx);

    //     //Wait for next step in the loop
    //   },
    //   100
    // );
  }

  setRandomPath() {
    // to figure out
    // this.ctx.moveTo(this.x, this.y);
    // this.ctx.lineTo(Math.random() * width, Math.random() * height);
    // this.ctx.stroke();
  }

  handleScreenCollision() {}
  didCollide(enemyChocobo) {}
  stunPlayer() {}
}

class BlackPlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, speed) {
    super(canvas, ctx, size, speed);
    this.x = this.canvas.width / 2 - 125;
    this.y = 0;
    this.imgSrc = "/img/players/black1.png";
    this.key = "a";
    this.path = undefined;
  }
}
class RedPlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, speed) {
    super(canvas, ctx, size, speed);
    this.x = this.canvas.width / 2 - 250;
    this.y = 0;
    this.imgSrc = "/img/players/red1.png";
    this.key = "p";
    this.path = undefined;
  }
}

class BluePlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, speed) {
    super(canvas, ctx, size, speed);
    this.x = this.canvas.width / 2 + 125;
    this.y = 0;
    this.imgSrc = "/img/players/blue1.png";
    this.key = "m";
    this.path = undefined;
  }
}
