describe('main component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('fountainHeaderDirective', () => {
      return {};
    });
  }));
  beforeEach(module('app', $provide => {
    $provide.factory('fountainTitleDirective', () => {
      return {};
    });
  }));
  beforeEach(module('app', $provide => {
    $provide.factory('fountainTechsDirective', () => {
      return {};
    });
  }));
  beforeEach(module('app', $provide => {
    $provide.factory('fountainFooterDirective', () => {
      return {};
    });
  }));
  it('should render the header, title, techs and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).toEqual(1);
    expect(element.find('fountain-title').length).toEqual(1);
    expect(element.find('fountain-techs').length).toEqual(1);
    expect(element.find('fountain-footer').length).toEqual(1);
  }));
});
