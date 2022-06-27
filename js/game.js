import Zombie from './sprites/zombie.js';
import Quiz from './quiz.js';
import ZombieFactory from './zombieFactory.js';

export default class Game {
  updateInterval;
  listOfZombies = [];
  zombieFactory;

  constructor() {
    this.zombieFactory = new ZombieFactory();
  }

  create() {
    // TODO Create settings object and initialize the settings

    // Create the quiz
    let quiz = new Quiz('easy');
    quiz.createQuestion();

    // Create the zombies
    var aZombie = new Zombie('.zombie');
    aZombie.image.onload = aZombie.walkLeft();
    document.getElementsByClassName('zombie1')[0].classList.add('walking');
    this.listOfZombies.push(aZombie);

    // add a 2nd zombie
    setTimeout(() => {
      var aNewZombie = new Zombie('.zombie2');
      console.log('spawning new zombie');

      aNewZombie.image.onload = aNewZombie.walkLeft();
      document.getElementsByClassName('zombie2')[0].classList.add('walking');
      this.listOfZombies.push(aNewZombie);
    }, 1000);

    document.getElementsByTagName('body')[0].addEventListener('click', () => {
      let zombie = document.getElementsByClassName('zombie1')[0];
      var rect = zombie.getBoundingClientRect();
      console.log(rect);
      // I need to end the game when the x attribute of rect is < -70
    });

    // Set the update interval
    this.updateInterval = setInterval(() => {
      this.update();
    }, 1000);
  }

  update() {
    // TODO Loop through each of the zombies
    console.log('updating');
    let zombie = this.listOfZombies[0];
    let zombiePosition = zombie.getXCoordinate();
    // Check for game over
    if (zombiePosition < -70) {
      this.gameOver();
    }

    // END Loop

    // Check if we should spawn a zombie (random. More chance the more difficult)
    this.zombieFactory.createNewZombieName(this.listOfZombies);

    // If we spawn a zombie, call the zombie factory
  }
  gameOver() {
    console.log('Game over');

    // Clear the update interval
    clearInterval(this.updateInterval);

    // Stop the zombies from moving by removing their walking class
    this.pauseZombies();

    // Show Game Over
    document.getElementById('gameOver').style.display = 'block';
  }

  pauseZombies() {
    this.listOfZombies.forEach((zombie) => {
      let htmlElement = zombie.canvas;
      htmlElement.classList.remove('walking');
    });
  }
}
