import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsComponent from './products.component';
import { StoreService } from '../../common/store/store.service';

let productsModule = angular.module('products', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('products', {
      url: '/products',
      component: 'products',
      resolve: {
        storeData: StoreService => StoreService.getProducts()
      }

    });
})

.component('products', productsComponent)

.service('StoreService', StoreService)

.name;

export default productsModule;
