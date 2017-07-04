import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkoutComponent from './checkout.component';

let checkoutModule = angular.module('checkout', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('checkout', {
      url: '/checkout',
      component: 'checkout',
      /*
      resolve: {
      	riskData: Risk => Risk.get().$promise
      }
      */
    });
})

.component('checkout', checkoutComponent)

.name;

export default checkoutModule;
