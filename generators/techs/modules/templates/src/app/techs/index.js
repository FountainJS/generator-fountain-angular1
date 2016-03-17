var angular = require('angular');

var tech = require('./tech');
var techs = require('./techs');

var techsModule = 'techs';

module.exports = techsModule;

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs);
