// import Sprite from './sprite.js';

export default class Zombie {
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
    this.image.src = this.spriteSheetURL;
    this.image.crossOrigin = true;
  }

  spritePositionToImagePosition(row, col) {
    return {
      x: this.BORDER_WIDTH + col * (this.SPACING_WIDTH + this.SPRITE_WIDTH),
      y: this.BORDER_WIDTH + row * (this.SPACING_WIDTH + this.SPRITE_HEIGHT),
    };
  }

  // TODO I can probably take an animation is an input and put this in the parent class
  animate() {
    // once we hit the end of the cycle,
    // start again
    if (this.frameIndex === this.walkCycle.length) {
      this.frameIndex = 0;
    }
    this.frame = this.walkCycle[this.frameIndex];
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(
      this.image,
      this.frame.x,
      this.frame.y,
      this.SPRITE_WIDTH,
      this.SPRITE_HEIGHT,
      0,
      0,
      this.SPRITE_WIDTH,
      this.SPRITE_HEIGHT
    );
    this.frameIndex += 1;
  }
}
