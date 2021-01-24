"use strict";

class Player {
  constructor(canvas, ctx, x, y, newX, newY, size, imgSrc, key, path, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = 0;
    this.newX = undefined;
    this.newY = undefined;
    this.size = 50;
    this.imgSrc = "/img/players/yellow1.png";
    this.key = " ";
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
    // NOT WORKING
    this.ctx.beginPath(); // Start a new path
    this.ctx.moveTo(this.x, this.y); // Move the pen to (30, 50)
    this.ctx.lineTo(
      Math.random() * this.canvas.width,
      Math.random() * this.canvas.height
    );
    this.ctx.lineTo(this.newX, 800); // Move the pen to end line in straight line
    this.ctx.strokeStyle = "#FF0000";
    this.ctx.stroke(); // Render the path
  }

  setDirection(direction) {
    if (direction === "down") this.newY += 50;
  }

  updatePosition() {
    this.y = this.newY + this.direction; // update player's position
  }

  // to be handled with path instead of player
  handleScreenCollision(path) {}

  didCollide(otherPlayer) {
    // STILL TO CHECK
    const playerLeft = this.x / 2;
    const playerRight = (this.x + this.size) / 2;
    const playerTop = this.y / 2;
    const playerBottom = (this.y + this.size) / 2;

    const otherPlayerLeft = otherPlayer.x / 2;
    const otherPlayerRight = (otherPlayer.x + otherPlayer.size) / 2;
    const otherPlayerTop = otherPlayer.y / 2;
    const otherPlayerBottom = (otherPlayer.y + otherPlayer.size) / 2;

    const crossLeft =
      otherPlayerLeft <= playerRight && otherPlayerLeft >= playerLeft;
    const crossRight =
      otherPlayerRight >= playerLeft && otherPlayerRight <= playerRight;

    const crossTop =
      otherPlayerTop <= playerBottom && otherPlayerTop >= playerTop;
    const crossBottom =
      otherPlayerBottom >= playerTop && otherPlayerBottom <= playerBottom;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  stunPlayer() {
    this.newY = 0;
  }
}

class BlackPlayer extends Player {
  constructor(canvas, ctx, x, y, newX, newY, size, imgSrc, key, path, speed) {
    super(canvas, ctx, newX, newY, size, speed);
    this.x = this.canvas.width / 2 - 125;
    this.y = 0;
    this.imgSrc = "/img/players/black1.png";
    this.key = "a";
    this.path = undefined;
  }
}
class RedPlayer extends Player {
  constructor(canvas, ctx, x, y, newX, newY, size, imgSrc, key, path, speed) {
    super(canvas, ctx, newX, newY, size, speed);
    this.x = this.canvas.width / 2 - 250;
    this.y = 0;
    this.imgSrc = "/img/players/red1.png";
    this.key = "p";
    this.path = undefined;
  }
}

class BluePlayer extends Player {
  constructor(canvas, ctx, x, y, newX, newY, size, imgSrc, key, path, speed) {
    super(canvas, ctx, newX, newY, size, speed);
    this.x = this.canvas.width / 2 + 125;
    this.y = 0;
    this.imgSrc = "/img/players/blue1.png";
    this.key = "m";
    this.path = undefined;
  }
}
