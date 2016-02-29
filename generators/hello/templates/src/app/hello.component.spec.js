<% if (modules !== 'inject') { -%>
var angular = require('angular');
require('angular-mocks');
var hello = require('./hello.component');

<% } -%>
describe('hello component', function() {
<% if (modules !== 'inject') { -%>
  beforeEach(function() {
    angular
      .module('hello', ['<%- templateUrl %>'])
      .component('hello', hello);
    angular.mock.module('hello');
  });
<% } else { -%>
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.module('<%- templateUrl %>'));
<% } -%>
  it('should render hello world', angular.mock.inject(function($rootScope, $compile) {
    var element = $compile('<hello>Loading...</hello>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
