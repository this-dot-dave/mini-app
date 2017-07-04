import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cartComponent from './cart.component';
import { StoreService } from '../../common/store/store.service';

let cartModule = angular.module('cart', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('cart', {
      url: '/cart',
      component: 'cart',
      resolve: {
        cartData: StoreService => StoreService.getCart()
      }
    });
})

.component('cart', cartComponent)

.service('StoreService', StoreService)

.name;

export default cartModule;
