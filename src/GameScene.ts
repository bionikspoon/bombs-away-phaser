import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }
  preload() {
    this.load.image("bomb", "assets/bomb.png");
    this.load.image("dude", "assets/dude.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("sky", "assets/sky.png");
    this.load.image("star", "assets/star.png");
  }
  create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 300, "star");

    const platforms = this.physics.add.staticGroup();
    platforms
      .create(400, 568, "ground")
      .setScale(2)
      .refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    const player = this.physics.add.sprite(100, 450, "dude");
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);
  }
}
