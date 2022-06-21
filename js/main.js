import Zombie from './sprites/zombie.js';

var aZombie = new Zombie('.zombie');

aZombie.image.onload = aZombie.walkLeft();
document.getElementsByClassName('zombie1')[0].classList.add('walking');

setTimeout(() => {
  var aNewZombie = new Zombie('.zombie2');
  console.log('spawning new zombie');

  aNewZombie.image.onload = aNewZombie.walkLeft();
  document.getElementsByClassName('zombie2')[0].classList.add('walking');
}, 1000);
