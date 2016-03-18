/// <reference path="../../typings/main.d.ts" />

describe('hello component', function() {
  beforeEach(angular.mock.module('app'));
  it('should render hello world', inject(function($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
