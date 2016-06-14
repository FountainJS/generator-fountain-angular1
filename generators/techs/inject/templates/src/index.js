var angular = require('angular');

require('./index.<%- css %>');

angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router']);
<% } else { -%>
  .module('app', []);
<% } -%>
