import { readFromLS, writeToLS } from './utilities/localStorage.js';
export default class Options {
  constructor() {}

  renderView() {
    if (
      document.getElementById('options-menu').style.display == 'none' ||
      document.getElementById('options-menu').style.display == ''
    ) {
      document.getElementById('options-menu').style.display = 'flex';
      return;
    }
    this.closeMenu();
  }

  closeMenu() {
    document.getElementById('options-menu').style.display = 'none';
    this.saveSettings();
  }

  saveSettings() {
    // Get the different radio buttons
    const veryEasy = document.getElementById('very-easy');
    const easy = document.getElementById('easy');
    const medium = document.getElementById('medium');
    const hard = document.getElementById('hard');
    const extreme = document.getElementById('extreme');

    const difficultySettings = [veryEasy, easy, medium, hard, extreme];

    const slow = document.getElementById('slow');
    const normal = document.getElementById('normal');
    const fast = document.getElementById('fast');

    const speedSettings = [slow, normal, fast];

    // Set the settings in Local Storage
    difficultySettings.forEach((radioButton) => {
      if (radioButton.checked) {
        writeToLS('difficulty', radioButton.value);
      }
    });

    speedSettings.forEach((radioButton) => {
      if (radioButton.checked) {
        writeToLS('zombie-speed', radioButton.value);
      }
    });
  }
}
