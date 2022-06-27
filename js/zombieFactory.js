import Zombie from './sprites/zombie.js';

export default class ZombieFactory {
  listOfZombies = [];

  createZombie(newZombieName) {
    return new Zombie(newZombieName);
  }

  createNewZombieName(listOfZombies) {
    const lastZombieCreated = listOfZombies[listOfZombies.length - 1];
    const lastZombieName = lastZombieCreated.canvasQuery;
    let numberOfLastZombie = lastZombieName.slice(7, lastZombieName.length);
    const numberOfNewZombie = Number(numberOfLastZombie) + 1;
    const nameOfNewZombie = '.zombie' + numberOfNewZombie;
    return nameOfNewZombie;
  }

  createHtmlTag(newZombieName) {
    const playingField = document.getElementById('playing-field');
    const newZombieNameWithoutThePeriod = newZombieName.slice(
      1,
      newZombieName.length
    );
    const newHtml =
      '<canvas class="zombie ' +
      newZombieNameWithoutThePeriod +
      '" width="500px" height="500px"></canvas>';

    playingField.insertAdjacentHTML('beforeend', newHtml);
  }

  spawnZombie(listOfZombies) {
    const newZombieName = this.createNewZombieName(listOfZombies);

    this.createHtmlTag(newZombieName);

    const newZombie = this.createZombie(newZombieName);

    newZombie.image.onload = newZombie.walkLeft();

    const newZombieNameWithoutThePeriod = newZombieName.slice(
      1,
      newZombieName.length
    );

    document
      .getElementsByClassName(newZombieNameWithoutThePeriod)[0]
      .classList.add('walking');

    listOfZombies.push(newZombie);
  }
}
