import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
  }

  preload() {
    console.log('this is the preload method');
  }

  create() {
    this.add.text(0, 0, 'This is the placeholder for the Boot scene. Click the spacebar to go to the Start Scene');
    // Transition from StartScene to GameScene on a click
    this.input.on('pointerup', () => {
      this.scene.stop('BootScene');
      this.scene.start('StartScene');
    });
  }

  update() {

  }
}