"use strict";

class Player {
  constructor(canvas, ctx, x, y, newX, newY, size, imgSrc, key, path, boolean) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = 0;
    this.newX = undefined;
    this.newY = undefined;
    this.size = 50;
    this.imgSrc = "/img/players/yellow1.png";
    this.key = "v";
    this.path = undefined; // randomized with Math.floor
    this.boolean = false; // depends on clicks
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
          img.width / 1.75, // original img size 200px / every player's size is now 114px * 114px
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
    //NOT IDEAL
    //creates a sorted array of numbers from 1 to 700 (canvas height)
    // function range(start, end) {
    //   return Array(end - start + 1)
    //     .fill()
    //     .map((_, idx) => start + idx);
    // }
    // let arr = range(1, 700);
    // console.log(arr);
    //creates a random X point every 50 y(vertical) pixels
    // arr.forEach((integer) => {
    //   if (integer % 50 === 0) {
    //     this.ctx.beginPath(); // Start a new path
    //     this.ctx.moveTo(this.x, integer); // Move the pen to (30, 50)

    //     this.ctx.lineTo(Math.random() * this.canvas.width, integer + 20);

    //     this.ctx.lineWidth = 5;
    //     this.ctx.strokeStyle = "white";
    //     this.ctx.stroke(); // Render the path
    //   }
    // });

    // WORKING -> creates two points: one in the middle of the screen, other to the finish line
    // how to set the player to advance this line every 5 pixels when clicking?
    this.ctx.beginPath(); // Start a new path
    this.ctx.moveTo(this.x, this.y); // Move the pen to (30, 50)

    let newPoint = this.ctx.lineTo(
      Math.random() * this.canvas.width,
      this.canvas.height / 2
    );

    let finalPoint = this.ctx.lineTo(Math.random() * this.canvas.width, 700); // Move the pen to end line in straight line
    console.log(this.size);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke(); // Render the path
  }

  updatePosition() {
    this.y += 100; // update player's position
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console.log(this.y);
  }

  // to be handled with path instead of player
  handleScreenCollision(path) {}

  didCollide(otherPlayer) {
    // STILL TO CHECK
    const playerLeft = this.x + 20; // player size = 114px
    // character occupies 1/3 of the image approximately
    // will decrease 30px for right and left to compensate square image dimensions
    // and decreaste 10px for top and bottom

    const playerRight = this.x + this.size - 30;
    const playerTop = this.y - 10;
    const playerBottom = this.y - 10 + this.size;

    const otherPlayerLeft = otherPlayer.x + 30;
    const otherPlayerRight = otherPlayer.x + otherPlayer.size - 30;
    const otherPlayerTop = otherPlayer.y + 10;
    const otherPlayerBottom = otherPlayer.y + otherPlayer.size - 10;

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
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, boolean) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 - 125;
    this.y = 0;
    this.imgSrc = "/img/players/black1.png";
    this.key = "a";
    this.path = undefined;
  }
}
class RedPlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, boolean) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 - 250;
    this.y = 0;
    this.imgSrc = "/img/players/red1.png";
    this.key = "p";
    this.path = undefined;
  }
}

class BluePlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, boolean) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 + 125;
    this.y = 0;
    this.imgSrc = "/img/players/blue1.png";
    this.key = "m";
    this.path = undefined;
  }
}
