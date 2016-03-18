var angular = require('angular');
require('angular-mocks');
var title = require('./title');

describe('title component', function () {
  beforeEach(function () {
    angular
      .module('fountainTitle', ['<%- templateUrl %>'])
      .component('fountainTitle', title);
    angular.mock.module('fountainTitle');
  });

  it('should render \'Allo, \'Allo!', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    var title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
