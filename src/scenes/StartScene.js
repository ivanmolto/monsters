import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'StartScene'
    });
  }

  preload() {
    console.log('this is the preload method');
  }

  create() {
    this.add.text(0, 0, 'This is the placeholder of the Start Scene');
  }

  update() {

  }
}