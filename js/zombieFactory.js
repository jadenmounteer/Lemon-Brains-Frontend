import Zombie from './sprites/zombie.js';

export default class ZombieFactory {
  createZombie(listOfZombies) {
    return new Zombie(this.createNewZombieName(listOfZombies));
  }

  createNewZombieName(listOfZombies) {
    const lastZombieCreated = listOfZombies[listOfZombies.length - 1];
    const lastZombieName = lastZombieCreated.canvasQuery;
    let numberOfLastZombie = lastZombieName.slice(7, lastZombieName.length);
    const numberOfNewZombie = Number(numberOfLastZombie) + 1;
    const nameOfNewZombie = '.zombie' + numberOfNewZombie;
    return nameOfNewZombie;
  }
}
