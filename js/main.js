import Game from './game.js';
import Options from './options.js';
import LemonadeStand from './sprites/lemonade-stand.js';
import { readFromLS, writeToLS } from './utilities/localStorage.js';

function main() {
  // Set the number of day
  let numberOfDay = readFromLS('numberOfDay');

  if (!numberOfDay) {
    numberOfDay = 1;
  }
  document.getElementById('number-of-days').innerHTML = numberOfDay;

  const options = new Options();

  const game = new Game();

  document
    .getElementById('customize-stand-button')
    .addEventListener('click', () => {
      options.renderView();
    });

  document.getElementById('start-game-button').addEventListener('click', () => {
    options.closeMenu();
    // Reset the user's stats
    numberOfDay = 1;
    writeToLS('numberOfDay', numberOfDay);
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

  document.getElementById('next-day').addEventListener('click', () => {
    let numberOfDay = readFromLS('numberOfDay');
    numberOfDay += 1;
    writeToLS('numberOfDay', numberOfDay);
    document.getElementById('end-of-day-div').style.display = 'none';
    game.create();
  });

  // Create the lemonade stand
  var lemonadeStand = new LemonadeStand();

  lemonadeStand.image.onload = lemonadeStand.blinkAnimation();
}

main();
