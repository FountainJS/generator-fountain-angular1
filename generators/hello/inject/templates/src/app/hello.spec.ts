describe('hello component', () => {
  beforeEach(angular.mock.module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('app', () => {
      return {
        templateUrl: 'app/hello.html'
      };
    });
  }));
  it('should render hello world', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
