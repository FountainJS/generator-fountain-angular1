describe('hello component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('app', () => {
      return {
        templateUrl: 'app/hello.html'
      };
    });
  }));
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
