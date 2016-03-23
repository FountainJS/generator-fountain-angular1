describe('title component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('fountainTitle', function () {
      return {
        templateUrl: 'app/title.html'
      };
    });
  }));
  it('should render \'Allo, \'Allo!', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    var title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
