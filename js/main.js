import Game from './game.js';

const game = new Game();

game.create();

document.getElementById('try-again').addEventListener('click', () => {
  game.tryAgain();
});
