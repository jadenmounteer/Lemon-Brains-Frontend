import Zombie from './sprites/zombie.js';
import Quiz from './quiz.js';
import ZombieFactory from './zombieFactory.js';
import LemonadeStand from './sprites/lemonade-stand.js';
import { readFromLS, writeToLS } from './utilities/localStorage.js';

export default class Game {
  updateInterval;
  // listOfZombies = [];
  zombieFactory;

  constructor() {
    this.zombieFactory = new ZombieFactory();
  }

  create() {
    // Initialize the settings
    const difficulty = readFromLS('difficulty');
    const zombieSpeed = readFromLS('zombie-speed');
    const lengthOfDay = readFromLS('lengthOfDay');
    console.log(lengthOfDay);

    // Hide the main menu
    document.getElementById('menu-buttons').style.display = 'none';

    // Create the lemonade stand
    // var lemonadeStand = new LemonadeStand();

    // lemonadeStand.image.onload = lemonadeStand.blinkAnimation();

    // Show the quiz
    document.getElementById('quiz').style.display = 'block';

    // Create the quiz
    let quiz = new Quiz(difficulty, this.zombieFactory);
    quiz.createQuestion();

    // Create the zombies
    var aZombie = new Zombie('.zombie1');
    aZombie.image.onload = aZombie.walkLeft();
    document.getElementsByClassName('zombie1')[0].classList.add(zombieSpeed);
    this.zombieFactory.listOfZombies.push(aZombie);

    // Set the update interval
    this.updateInterval = setInterval(() => {
      this.update();
    }, 1000);
  }

  update() {
    // Check if game over
    this.zombieFactory.listOfZombies.forEach((zombie) => {
      let zombiePosition = zombie.getXCoordinate();
      if (zombiePosition < -70) {
        this.gameOver();
      }
    });

    // Check if we should spawn a zombie (random. More chance the more difficult)
    const randomInt = Math.floor(Math.random() * 2); // 1 in 3 chance
    if (randomInt == 0) {
      // If we spawn a zombie, call the zombie factory
      this.zombieFactory.spawnZombie(
        this.zombieFactory.listOfZombies,
        readFromLS('zombie-speed')
      );
    }
  }
  gameOver() {
    // Clear the update interval
    clearInterval(this.updateInterval);

    // Stop the zombies from moving by removing their walking class
    this.pauseZombies();

    document.getElementById('quiz').style.display = 'none';

    // Show Game Over
    document.getElementById('game-over-div').style.display = 'block';
  }

  pauseZombies() {
    this.zombieFactory.listOfZombies.forEach((zombie) => {
      let htmlElement = zombie.canvas;
      htmlElement.classList.remove('walking');
    });
  }

  tryAgain() {
    location.reload();
  }
}
