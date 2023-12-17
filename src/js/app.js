import Controller from "./controller";
import Popovers from "./popovers";

const popovers = new Popovers();
popovers.bindToDOM(document.querySelector('body'));

const ctrl = new Controller(popovers);
ctrl.init();
