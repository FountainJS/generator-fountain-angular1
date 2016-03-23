/// <reference path="../../typings/main.d.ts" />

describe('title component', function () {
  beforeEach(module('app', function ($provide: ng.auto.IProvideService) {
    $provide.factory('fountainTitle', function () {
      return {
        templateUrl: 'app/title.html'
      };
    });
  }));
  it('should render \'Allo, \'Allo!', inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
