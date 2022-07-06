export default class Day {
  initialize(numberOfDay) {
    document.getElementById('number-of-days').innerHTML = numberOfDay;
  }

  updateUI() {
    console.log('Updating time');
    let timeLeft = Number(document.getElementById('day-time-left').innerHTML);
    timeLeft -= 1;
    document.getElementById('day-time-left').innerHTML = timeLeft;
  }
}
