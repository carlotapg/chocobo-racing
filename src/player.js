"use strict";

class Player {
  constructor(
    canvas,
    ctx,
    x,
    y,
    newX,
    newY,
    size,
    imgSrc,
    key,
    path,
    boolean,
    name
  ) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = 0;
    this.newX = undefined;
    this.newY = undefined;
    this.size = 75;
    this.imgSrc = "/img/players/yellow1.png";
    this.key = "v";
    this.path = undefined; // randomized with Math.floor
    this.boolean = false; // depends on clicks
    this.name = "Player 1";
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

  updatePosition() {
    this.y += 200;
    // update player's vertical position
    let randomX = Number((Math.random() * this.canvas.width) / 10);
    this.x += Number(randomX - (Math.random() * this.canvas.width) / 10);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.drawSprite();
  }

  // only considers width
  handleScreenCollision() {
    const screenLeft = 0;
    const screenRight = this.canvas.width;

    const playerLeft = this.x;
    const playerRight = this.x + this.size;

    if (playerLeft <= screenLeft) {
      this.x += 10;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    } else if (playerRight >= screenRight - 50) {
      this.x -= 10;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  didCollide(otherPlayer) {
    // STILL TO CHECK
    const playerLeft = this.x + 30; // player size = 114px
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
      this.stunPlayer(otherPlayer);
    }
  }
  stunPlayer(enemy) {
    this.y = 0;
    enemy.y = 0;
    this.x += 60;
    enemy.x -= 60;

    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

class BlackPlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, boolean, name) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 - 125;
    this.y = 0;
    this.imgSrc = "/img/players/black1.png";
    this.key = "a";
    this.path = undefined;
    this.name = "Player 2";
  }
}
class RedPlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, boolean, name) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 - 250;
    this.y = 0;
    this.imgSrc = "/img/players/red1.png";
    this.key = "p";
    this.path = undefined;
    this.name = "Player 3";
  }
}

class BluePlayer extends Player {
  constructor(canvas, ctx, x, y, size, imgSrc, key, path, boolean, name) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 + 125;
    this.y = 0;
    this.imgSrc = "/img/players/blue1.png";
    this.key = "m";
    this.path = undefined;
    this.name = "Player 4";
  }
}
