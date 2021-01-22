"use strict";

class Chocobo {
  constructor(x, y, image) {
    this.name = ["player1", "player2", "player3", "player4"];
    this.ctx = undefined;
    this.canvas = undefined;
    this.x = undefined; // depends on number of players
    this.y = undefined; // depends on number of players
    this.size = 200;
    this.image = [];
    this.key = undefined;
    this.path = undefined; // randomized with Math.floor
    this.speed = undefined; // depends on clicks
  }
  draw() {} // to figure out

  setRandomPath() {
    // to figure out
    context.moveTo(this.x, this.y);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }

  goForward() {
    if (this.key === "forward") {
      this.path++;
    }
  }
  handleScreenCollision() {}
  didCollide(enemyChocobo) {}
  stunPlayer() {}
}
