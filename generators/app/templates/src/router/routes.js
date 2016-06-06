<% if (modules === 'inject') { -%>
<% include inject/routes.js %>
<% } else { -%>
<% include modules/routes.js %>
<% } -%>
function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
}
