describe('header component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('fountainHeader', function () {
      return {
        templateUrl: 'app/header.html'
      };
    });
  }));
  it('should render \'Fountain Generator\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    var header = element.find('a');
    expect(header.html().trim()).toEqual('Fountain Generator');
  }));
});
