export default class Popovers {
  constructor() {
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }
  
  createPopovers(elem) {    
    const popovers = document.createElement('div');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    h3.textContent = elem.title;
    p.textContent = elem.getAttribute('data-content');
    
    popovers.classList.add('active-popovers');
    h3.classList.add('header-popovers');
    p.classList.add('body-popovers');
    div.classList.add('arrow');
    
    popovers.appendChild(h3);
    popovers.appendChild(p);
    popovers.appendChild(div);
    document.body.appendChild(popovers);
    
    const { top, left } = elem.getBoundingClientRect();
    
    popovers.style.top = top - popovers.offsetHeight - 10 + 'px';
    popovers.style.left = left + elem.offsetWidth / 2 - popovers.offsetWidth / 2 + 'px';
    div.style.left = popovers.offsetWidth / 2 - div.offsetWidth / 2 + 'px';
  }

  removePopovers() {
    if (document.querySelector('.active-popovers')) {
      document.querySelector('.active-popovers').remove();
    }
  }
}
