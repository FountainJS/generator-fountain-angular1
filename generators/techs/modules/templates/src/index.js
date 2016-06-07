var angular = require('angular');

var techsModule = require('./app/techs/index');
<% if (router === 'uirouter') { -%>
require('angular-ui-router');
var routesConfig = require('./routes');
<% } -%>

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');

require('./index.<%- css %>');

angular
<% if (router === 'uirouter') { -%>
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
<% } else { -%>
  .module('app', [techsModule])
<% } -%>
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
