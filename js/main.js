import Zombie from './sprites/zombie.js';
import Logo from './sprites/logo.js';

var aZombie = new Zombie();

aZombie.image.onload = aZombie.walkLeft();

var logo = new Logo();
logo.image.onload = logo.bubbleAnimation();
