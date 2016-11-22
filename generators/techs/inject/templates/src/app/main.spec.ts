describe('main component', () => {
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainHeaderDirective', () => {
      return {};
    });
  }));
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainTitleDirective', () => {
      return {};
    });
  }));
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainTechsDirective', () => {
      return {};
    });
  }));
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('fountainFooterDirective', () => {
      return {};
    });
  }));
  it('should render the header, title, techs and footer', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).toEqual(1);
    expect(element.find('fountain-title').length).toEqual(1);
    expect(element.find('fountain-techs').length).toEqual(1);
    expect(element.find('fountain-footer').length).toEqual(1);
  }));
});
