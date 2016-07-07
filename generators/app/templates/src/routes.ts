/// <reference path="../typings/index.d.ts" />

<% if (modules === 'inject') { -%>
angular
  .module('app')
  .config(routesConfig);
<% } else { -%>
export default routesConfig;
<% } -%>

interface IComponentState extends angular.ui.IState {
  component?: string;
}

interface IStateProvider extends angular.IServiceProvider {
    state(name: string, config: IComponentState): IStateProvider;
    state(config: IComponentState): IStateProvider;
    decorator(name?: string, decorator?: (state: IComponentState, parent: Function) => any): any;
}

/** @ngInject */
function routesConfig($stateProvider: IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
}
