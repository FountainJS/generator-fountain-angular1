var angular = require('angular');

var hello = require('./app/hello');
<% if (router === 'uirouter') { -%>
require('angular-ui-router');
var routesConfig = require('./routes');
<% } -%>

<% if (modules === 'webpack') { -%>
require('./index.<%- css %>');

<% } -%>
var app = 'app';
module.exports = app;

angular
<% if (router === 'uirouter') { -%>
  .module(app, ['ui.router'])
  .config(routesConfig)
<% } else { -%>
  .module(app, [])
<% } -%>
  .component('app', hello);
