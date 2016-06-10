/// <reference path="../typings/index.d.ts" />

<% if (modules === 'inject') { -%>
angular
  .module('app')
  .config(routesConfig);
<% } else { -%>
export default routesConfig;
<% } -%>

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    });
}
