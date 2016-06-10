/// <reference path="../../typings/index.d.ts" />

describe('footer component', () => {
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainFooter', () => {
      return {
        templateUrl: 'app/footer.html'
      };
    });
  }));
  it('should render \'FountainJS team\'', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('FountainJS team');
  }));
});
