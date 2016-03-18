describe('hello component', function () {
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.module('<%- templateUrl %>'));
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
