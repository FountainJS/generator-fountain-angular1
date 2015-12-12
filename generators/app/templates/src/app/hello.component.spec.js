<% if (modules) { -%>
import angular from 'angular';
import angularMock from 'angular-mocks';
import { app } from '../index';
<% } -%>

describe('hello component', function() {
<% if (modules) { -%>
  beforeEach(angular.mock.module(app));
<% } else { -%>
  beforeEach(angular.mock.module('app'));
<% } -%>
  it('should render hello world', angular.mock.inject(function($rootScope, $compile) {
    const element = $compile('<hello>Loading...</hello>')($rootScope);
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
