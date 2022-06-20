// TODO: Review where the sprite is on the screen
const SPRITE_WIDTH = 320; // The total width in px divided by the number of columns
const SPRITE_HEIGHT = 320; // The total height in px divided by the total rows
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

function spritePositionToImagePosition(row, col) {
  return {
    x: BORDER_WIDTH + col * (SPACING_WIDTH + SPRITE_WIDTH),
    y: BORDER_WIDTH + row * (SPACING_WIDTH + SPRITE_HEIGHT),
  };
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var spriteSheetURL = 'Assets/Spritesheets/zombie-walking-left.png';
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

// extract all of our frames
var zombie0 = spritePositionToImagePosition(0, 0);
var zombie1 = spritePositionToImagePosition(0, 1);

var walkCycle = [zombie0, zombie1];

var frameIndex = 0;
var frame;
function animate() {
  // once we hit the end of the cycle,
  // start again
  if (frameIndex === walkCycle.length) {
    frameIndex = 0;
  }
  frame = walkCycle[frameIndex];
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    image,
    frame.x,
    frame.y,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  );
  frameIndex += 1;
}

image.onload = function () {
  // Set the animation and its speed
  setInterval(animate, 500);
};
