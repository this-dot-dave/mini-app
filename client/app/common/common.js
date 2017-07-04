import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Footer from './footer/footer';
import Store from './store/store';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  Footer,
  Store
])

.name;

export default commonModule;
