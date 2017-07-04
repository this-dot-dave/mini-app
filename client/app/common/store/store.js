import angular from 'angular';
import StoreService from './store.service';

let storeModule = angular.module('store', [])

.service('StoreService', StoreService)

.name;

export default storeModule;
