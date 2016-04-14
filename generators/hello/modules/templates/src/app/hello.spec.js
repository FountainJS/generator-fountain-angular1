var angular = require('angular');
require('angular-mocks');
var hello = require('./hello');

describe('hello component', function () {
  beforeEach(function () {
    angular
      .module('fountainHello', ['<%- templateUrl %>'])
      .component('fountainHello', hello);
    angular.mock.module('fountainHello');
  });
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
