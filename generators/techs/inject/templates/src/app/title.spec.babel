describe('title component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('fountainTitle', () => {
      return {
        templateUrl: 'app/title.html'
      };
    });
  }));
  beforeEach(angular.mock.module('app'));
  it('should render \'Allo, \'Allo!', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
