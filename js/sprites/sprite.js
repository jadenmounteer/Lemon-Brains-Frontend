export default class Sprite {
  constructor() {}

  spritePositionToImagePosition(row, col) {
    return {
      x: this.BORDER_WIDTH + col * (this.SPACING_WIDTH + this.SPRITE_WIDTH),
      y: this.BORDER_WIDTH + row * (this.SPACING_WIDTH + this.SPRITE_HEIGHT),
    };
  }
}
