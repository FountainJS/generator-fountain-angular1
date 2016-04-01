var angular = require('angular');

var hello = require('./app/hello');

<% if (modules === 'webpack') { -%>
require('./index.<%- css %>');

<% } -%>
var app = 'app';
module.exports = app;

angular
  .module(app, [])
  .component('app', hello);

angular.bootstrap(document, ['app']);
