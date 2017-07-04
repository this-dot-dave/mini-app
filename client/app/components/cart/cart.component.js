import template from './cart.html';
import controller from './cart.controller';
import './cart.scss';

let cartComponent = {
  bindings: {
    cartData: '<'
  },
  template,
  controller
};

export default cartComponent;
