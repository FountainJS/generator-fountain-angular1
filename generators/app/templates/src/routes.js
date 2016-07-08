<% if (modules === 'inject') { -%>
angular
  .module('app')
  .config(routesConfig);
<% } else { -%>
module.exports = routesConfig;
<% } -%>

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
}
