import * as Phaser from 'phaser';
import scenes from './scenes/scenes';

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: scenes,
  physics: {
    default: 'arcade',
    matter: {
      debug: true,
    },
  },
  roundPixels: true,
};

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.start('Boot');
  }
}

window.onload = () => {
  window.game = new Game();
};