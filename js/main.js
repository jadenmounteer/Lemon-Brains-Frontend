// // TODO: Review where the sprite is on the screen
// const SPRITE_WIDTH = 320; // The total width in px divided by the number of columns (zombie is currently at 10x scale at 640 x 320)
// const SPRITE_HEIGHT = 320; // The total height in px divided by the total rows
// const BORDER_WIDTH = 1;
// const SPACING_WIDTH = 1;

// function spritePositionToImagePosition(row, col) {
//   return {
//     x: BORDER_WIDTH + col * (SPACING_WIDTH + SPRITE_WIDTH),
//     y: BORDER_WIDTH + row * (SPACING_WIDTH + SPRITE_HEIGHT),
//   };
// }

// var canvas = document.querySelector('.zombie');
// var context = canvas.getContext('2d');

// var spriteSheetURL = 'Assets/Spritesheets/zombie-walking-left.png';
// var image = new Image();
// image.src = spriteSheetURL;
// image.crossOrigin = true;

// // extract all of our frames
// var zombie0 = spritePositionToImagePosition(0, 0);
// var zombie1 = spritePositionToImagePosition(0, 1);

// var walkCycle = [zombie0, zombie1];

// var frameIndex = 0;
// var frame;
// function animate() {
//   // once we hit the end of the cycle,
//   // start again
//   if (frameIndex === walkCycle.length) {
//     frameIndex = 0;
//   }
//   frame = walkCycle[frameIndex];
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.drawImage(
//     image,
//     frame.x,
//     frame.y,
//     SPRITE_WIDTH,
//     SPRITE_HEIGHT,
//     0,
//     0,
//     SPRITE_WIDTH,
//     SPRITE_HEIGHT
//   );
//   frameIndex += 1;
// }

// function zombieWalk() {
//   setInterval(animate, 500);
// }

// image.onload = zombieWalk();

// NEW CODE
import Zombie from './sprites/zombie.js';

var aZombie = new Zombie();

aZombie.image.onload = function () {
  setInterval(aZombie.animate.bind(aZombie), 500);
};
