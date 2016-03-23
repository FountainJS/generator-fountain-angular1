/// <reference path="../../typings/main.d.ts" />

describe('footer component', function () {
  beforeEach(module('app', function ($provide: ng.auto.IProvideService) {
    $provide.factory('fountainFooter', function () {
      return {
        templateUrl: 'app/footer.html'
      };
    });
  }));
  it('should render \'FountainJS team\'', inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('FountainJS team');
  }));
});
