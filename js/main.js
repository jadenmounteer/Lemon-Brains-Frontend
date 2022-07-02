import Game from './game.js';

function main() {
  const game = new Game();

  document.getElementById('start-game-button').addEventListener('click', () => {
    game.create();
  });

  document.getElementById('try-again').addEventListener('click', () => {
    game.tryAgain();
  });
}

main();
