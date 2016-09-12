'use strict';

routingConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routingConfig($stateProvider, $urlRouterProvider) {
  
  const states = [{
    name: 'index',
    url: '/',
    template: '<index></index>',
  }];

  states.forEach(state => $stateProvider.state(state));

  $urlRouterProvider.otherwise('/');
}
