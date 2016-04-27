describe('header component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('fountainHeader', () => {
      return {
        templateUrl: 'app/header.html'
      };
    });
  }));
  it('should render \'Fountain Generator\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Fountain Generator');
  }));
});
