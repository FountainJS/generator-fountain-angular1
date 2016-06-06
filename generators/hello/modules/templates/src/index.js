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
  .module(app, [<% if (router === 'uirouter') { -%>'ui.router'<% } -%><% if (router === 'router') { -%>'ngComponentRouter'<% } -%>])
<% if (router === 'uirouter') { -%>
  .config(routesConfig)
<% } -%>
  .component('app', hello);
<% if (modules === 'systemjs') { -%>

angular.bootstrap(document, ['app']);
<% } -%>