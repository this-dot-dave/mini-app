import template from './products.html';
import controller from './products.controller';
import './products.scss';

let productsComponent = {
  bindings: {
    storeData: '<'
  },
  template,
  controller
};

export default productsComponent;
