angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router'])
  .config(routesConfig)
<% } else { -%>
  .module('app', [])
<% } -%>
  .service('todoService', TodoService);
