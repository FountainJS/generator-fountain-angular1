/// <reference path="../../typings/main.d.ts" />

describe('main component', () => {
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainHeaderDirective', () => {
      return {};
    });
  }));
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainTitleDirective', () => {
      return {};
    });
  }));
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainTechsDirective', () => {
      return {};
    });
  }));
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainFooterDirective', () => {
      return {};
    });
  }));
  it('should render the header, title, techs and footer', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).to.equal(1);
    expect(element.find('fountain-title').length).to.equal(1);
    expect(element.find('fountain-techs').length).to.equal(1);
    expect(element.find('fountain-footer').length).to.equal(1);
  }));
});
