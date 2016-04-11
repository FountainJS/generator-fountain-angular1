var angular = require('angular');
require('angular-mocks');
var main = require('./main');

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('app', ['<%- templateUrl %>'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, techs and footer', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).to.equal(1);
    expect(element.find('fountain-title').length).to.equal(1);
    expect(element.find('fountain-techs').length).to.equal(1);
    expect(element.find('fountain-footer').length).to.equal(1);
  }));
});
