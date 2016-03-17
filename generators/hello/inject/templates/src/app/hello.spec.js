describe('hello component', function () {
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.module('<%- templateUrl %>'));
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
