/// <reference path="../../typings/main.d.ts" />

describe('header component', function () {
  beforeEach(module('app', function ($provide: ng.auto.IProvideService) {
    $provide.factory('fountainHeader', function () {
      return {
        templateUrl: 'app/header.html'
      };
    });
  }));
  it('should render \'Foutain Generator\'', inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Foutain Generator');
  }));
});
