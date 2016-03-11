/// <reference path="../../typings/tsd.d.ts" />

<% if (modules !== 'inject') { -%>
import * as angular from 'angular';
import 'angular-mocks';
import { hello } from './hello.component';
<% } -%>

describe('hello component', function() {
<% if (modules !== 'inject') { -%>
  beforeEach(function() {
    angular
      .module('hello', ['<%- templateUrl %>'])
      .component('hello', hello);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('hello');
  });
<% } else { -%>
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.module('<%- templateUrl %>'));
<% } -%>
  it('should render hello world', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(function($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
