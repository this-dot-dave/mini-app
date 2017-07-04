import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Products from './products/products';
import Cart from './cart/cart';
import Checkout from './checkout/checkout';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Products,
  Cart,
  Checkout
])

.name;

export default componentModule;
