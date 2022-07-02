export default class Options {
  constructor() {}

  renderView() {
    if (document.getElementById('options-menu').style.display == 'none') {
      document.getElementById('options-menu').style.display = 'flex';
      return;
    }
    this.closeMenu();
  }

  closeMenu() {
    document.getElementById('options-menu').style.display = 'none';
  }
}
