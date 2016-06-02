<% if (modules !== 'inject') { -%>
<% include modules/directive.spec.header.js %>
<% } -%>
describe('<%- directiveName %> directive', function () {
  it('should...', angular.mock.inject(function ($rootScope, $compile) {
  }));
});
