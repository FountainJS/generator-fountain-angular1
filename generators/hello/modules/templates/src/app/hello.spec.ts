import * as angular from 'angular';
import 'angular-mocks';
import {hello} from './hello';

describe('hello component', () => {
  beforeEach(() => {
    angular
      .module('fountainHello', ['<%- templateUrl %>'])
      .component('fountainHello', hello);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('fountainHello');
  });
  it('should render hello world', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
