import Game from './game.js';
import Options from './options.js';

function main() {
  // TODO Create the options object
  const options = new Options();

  const game = new Game();

  document.getElementById('start-game-button').addEventListener('click', () => {
    options.closeMenu();
    game.create();
  });

  document
    .getElementById('customize-stand-button')
    .addEventListener('click', () => {
      options.renderView();
    });

  document
    .getElementById('close-settings-button')
    .addEventListener('click', () => {
      options.closeMenu();
    });

  document.getElementById('try-again').addEventListener('click', () => {
    game.tryAgain();
  });
}

main();
