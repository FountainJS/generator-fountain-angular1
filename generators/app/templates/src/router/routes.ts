/// <reference path="../typings/index.d.ts" />

<% if (modules === 'inject') { -%>
<% include inject/routes.ts %>
<% } else { -%>
<% include modules/routes.ts %>
<% } -%>
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
}
