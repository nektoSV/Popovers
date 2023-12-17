export default class Controller {
  constructor(popovers) {
    this.popovers = popovers;
  }
  
  init() {
    this.registrationEvents();
  }

  registrationEvents() {
    const btn = document.querySelector('.btn');
    this.onCellClick = this.onCellClick.bind(this);
    btn.addEventListener('click', this.onCellClick);
  }

  onCellClick(el) {
    const elem = el.target;
    
    if (!elem.className.includes('popovers')) {
      this.popovers.createPopovers(elem);
      elem.classList.toggle('popovers');
    } else {
      this.popovers.removePopovers();
      elem.classList.toggle('popovers');
    }
  }
}
