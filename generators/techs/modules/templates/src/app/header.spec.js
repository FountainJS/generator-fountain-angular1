var angular = require('angular');
require('angular-mocks');
var header = require('./header');

describe('header component', function () {
  beforeEach(function () {
    angular
      .module('fountainHeader', ['<%- templateUrl %>'])
      .component('fountainHeader', header);
    angular.mock.module('fountainHeader');
  });

  it('should render \'Fountain Generator\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    var header = element.find('a');
    expect(header.html().trim()).toEqual('Fountain Generator');
  }));
});
