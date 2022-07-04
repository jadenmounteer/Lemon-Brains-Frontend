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
    console.log('closing menu');
    this.closeMenu();
  }

  closeMenu() {
    document.getElementById('options-menu').style.display = 'none';
  }
}
