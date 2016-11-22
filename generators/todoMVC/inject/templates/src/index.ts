angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router'])
<% } else { -%>
  .module('app', [])
<% } -%>
  .service('todoService', TodoService);
