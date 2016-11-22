describe('header component', () => {
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainHeader', () => {
      return {
        templateUrl: 'app/header.html'
      };
    });
  }));
  it('should render \'Fountain Generator\'', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Fountain Generator');
  }));
});
