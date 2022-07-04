import Game from './game.js';
import Options from './options.js';
import LemonadeStand from './sprites/lemonade-stand.js';

function main() {
  const options = new Options();

  const game = new Game();

  document
    .getElementById('customize-stand-button')
    .addEventListener('click', () => {
      options.renderView();
    });

  document.getElementById('start-game-button').addEventListener('click', () => {
    options.closeMenu();
    game.create();
  });

  document
    .getElementById('close-settings-button')
    .addEventListener('click', () => {
      options.closeMenu();
    });

  document.getElementById('try-again').addEventListener('click', () => {
    game.tryAgain();
  });

  // Create the lemonade stand
  var lemonadeStand = new LemonadeStand();

  lemonadeStand.image.onload = lemonadeStand.blinkAnimation();
}

main();
