var angular = require('angular');

require('./index.<%- css %>');

angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router'])
  .config(routesConfig);
<% } else if (router === 'router') { -%>
  .module('app', ['ngComponentRouter']);
<% } else { -%>
  .module('app', []);
<% } -%>
