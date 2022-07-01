import Zombie from './sprites/zombie.js';
import Quiz from './quiz.js';
import ZombieFactory from './zombieFactory.js';

export default class Game {
  updateInterval;
  // listOfZombies = [];
  zombieFactory;

  constructor() {
    this.zombieFactory = new ZombieFactory();
  }

  create() {
    // TODO Create settings object and initialize the settings

    // Create the quiz
    let quiz = new Quiz('medium');
    quiz.createQuestion(this.zombieFactory);

    // Create the zombies
    var aZombie = new Zombie('.zombie1');
    aZombie.image.onload = aZombie.walkLeft();
    document.getElementsByClassName('zombie1')[0].classList.add('walking');
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
      this.zombieFactory.spawnZombie(this.zombieFactory.listOfZombies);
    }
  }
  gameOver() {
    console.log('Game over');

    // Clear the update interval
    clearInterval(this.updateInterval);

    // Stop the zombies from moving by removing their walking class
    this.pauseZombies();

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
