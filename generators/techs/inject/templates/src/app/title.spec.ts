/// <reference path="../../typings/index.d.ts" />

describe('title component', () => {
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainTitle', () => {
      return {
        templateUrl: 'app/title.html'
      };
    });
  }));
  it('should render \'Allo, \'Allo!', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
