var angular = require('angular');

var techsModule = require('./app/techs/index');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');

require('./index.<%- css %>');

angular
  .module('app', [techsModule])
  .component('app', main)
  .component('techsHeader', header)
  .component('techsTitle', title)
  .component('techsFooter', footer);
