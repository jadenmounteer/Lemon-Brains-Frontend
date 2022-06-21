import Zombie from './sprites/zombie.js';

var aZombie = new Zombie();

aZombie.image.onload = aZombie.walkLeft();
