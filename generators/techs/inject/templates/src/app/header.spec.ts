/// <reference path="../../typings/main.d.ts" />

describe('header component', () => {
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainHeader', () => {
      return {
        templateUrl: 'app/header.html'
      };
    });
  }));
  it('should render \'Foutain Generator\'', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).to.equal('Foutain Generator');
  }));
});
