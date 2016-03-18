var angular = require('angular');
require('angular-mocks');
var footer = require('./footer');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('fountainFooter', ['<%- templateUrl %>'])
      .component('fountainFooter', footer);
    angular.mock.module('fountainFooter');
  });

  it('should render \'FountainJS team\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    var footer = element.find('a');
    expect(footer.html().trim()).toEqual('FountainJS team');
  }));
});
