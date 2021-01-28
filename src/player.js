"use strict";

class Player {
  constructor(
    canvas,
    ctx,
    x,
    y,
    size,
    imgSrc,
    gifSrc,
    key,
    path,
    boolean,
    name
  ) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = 0;
    this.size = 75;
    this.imgSrc = "img/players/yellow.png";
    this.gifSrc = "img/players/yellow-chocobo.gif";
    this.key = "v";
    this.path = undefined; // randomized with Math.floor
    this.boolean = false; // depends on clicks
    this.name = "Player 1";
  }

  drawSprite() {
    // SINGLE STATIC IMAGE
    // let img = new Image();
    // img.addEventListener(
    //   "load",
    //   (event) => {
    //     this.ctx.drawImage(
    //       img,
    //       this.x,
    //       this.y,
    //       img.width / 1.75, // original img size 200px / every player's size is now 114px * 114px
    //       img.height / 1.75
    //     );
    //   },
    //   false
    // );
    // img.src = this.imgSrc;
    // SPRITES
    // Define the number of columns and rows in the sprite
    let numColumns = 4;
    let numRows = 1;
    const ch = this.canvas.height;
    const cw = this.canvas.width;
    let img = new Image();
    img.src = this.imgSrc;

    // Define the size of a frame
    let frameWidth = img.width / numColumns;
    let frameHeight = img.height / numRows;
    // The sprite image frame starts from 0
    let currentFrame = 0;
    img.addEventListener(
      "load",
      (event) => {
        img.src = this.imgSrc;

        // Pick a new frame
        currentFrame++;
        // Make the frames loop
        let maxFrame = numColumns * numRows - 1;
        if (currentFrame > maxFrame) {
          currentFrame = 0;
        }
        // Update rows and columns
        let column = currentFrame % numColumns;
        let row = Math.floor(currentFrame / numColumns);
        // Clear and draw

        this.ctx.clearRect(
          this.x + 25,
          this.y,
          frameWidth / 1.75 - 50,
          frameHeight / 1.75
        );

        this.ctx.drawImage(
          img,
          column * frameWidth,
          row * frameHeight,
          frameWidth,
          frameHeight,
          this.x,
          this.y,
          frameWidth / 1.75,
          frameHeight / 1.75
        );

        //Wait for next step in the loop
      },
      100
    );
  }

  updatePosition() {
    this.y += 5;
    // update player's vertical position
    let randomX = Number((Math.random() * this.canvas.width) / 10);
    this.x += Number(randomX - (Math.random() * this.canvas.width) / 10);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.drawSprite();
  }

  // only considers width
  handleScreenCollision() {
    const screenLeft = 20;
    const screenRight = this.canvas.width - 20;

    const playerLeft = this.x;
    const playerRight = this.x + this.size;

    if (playerLeft <= screenLeft) {
      this.x += 10;
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    } else if (playerRight >= screenRight - 50) {
      this.x -= 10;
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  didCollide(otherPlayer) {
    // STILL TO CHECK
    const playerLeft = this.x + 20; // player size = 114px
    // character occupies 1/3 of the image approximately
    // will decrease 20px for right and left to compensate square image dimensions
    // and decreaste 5px for top and bottom

    const playerRight = this.x + this.size - 20;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    const otherPlayerLeft = otherPlayer.x + 20;
    const otherPlayerRight = otherPlayer.x + otherPlayer.size - 20;
    const otherPlayerTop = otherPlayer.y;
    const otherPlayerBottom = otherPlayer.y + otherPlayer.size;

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
    this.x += 100;
    enemy.x -= 100;

    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

class BlackPlayer extends Player {
  constructor(
    canvas,
    ctx,
    x,
    y,
    size,
    imgSrc,
    gifSrc,
    key,
    path,
    boolean,
    name
  ) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 - 125;
    this.y = 0;
    this.imgSrc = "img/players/black.png";
    this.gifSrc = "img/players/black-chocobo.gif";
    this.key = "a";
    this.path = undefined;
    this.name = "Player 2";
  }
}
class RedPlayer extends Player {
  constructor(
    canvas,
    ctx,
    x,
    y,
    size,
    imgSrc,
    gifSrc,
    key,
    path,
    boolean,
    name
  ) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 - 250;
    this.y = 0;
    this.imgSrc = "img/players/red.png";
    this.gifSrc = "img/players/red-chocobo.gif";
    this.key = "p";
    this.path = undefined;
    this.name = "Player 3";
  }
}

class BluePlayer extends Player {
  constructor(
    canvas,
    ctx,
    x,
    y,
    size,
    imgSrc,
    gifSrc,
    key,
    path,
    boolean,
    name
  ) {
    super(canvas, ctx, size, boolean);
    this.x = this.canvas.width / 2 + 125;
    this.y = 0;
    this.imgSrc = "img/players/blue.png";
    this.gifSrc = "img/players/blue-chocobo.gif";
    this.key = "m";
    this.path = undefined;
    this.name = "Player 4";
  }
}
