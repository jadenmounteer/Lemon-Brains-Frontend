import Sprite from './sprite.js';

export default class Zombie extends Sprite {
  SPRITE_WIDTH = 320;
  SPRITE_HEIGHT = 320; // The total height in px divided by the total rows
  BORDER_WIDTH = 1;
  SPACING_WIDTH = 1;
  canvas = document.querySelector('.zombie');
  context = this.canvas.getContext('2d');
  spriteSheetURL = 'Assets/Spritesheets/zombie-walking-left.png';

  // Animations
  walkCycle = [];

  // misc
  frameIndex = 0;
  frame;

  image = new Image();

  // Get all of the frames
  zombie0 = this.spritePositionToImagePosition(0, 0);
  zombie1 = this.spritePositionToImagePosition(0, 1);
  walkCycle = [this.zombie0, this.zombie1];
  walkCycleLength = this.walkCycle.length;

  constructor() {
    super();
    this.image.src = this.spriteSheetURL;
    this.image.crossOrigin = true;
  }
}
