<% if (modules !== 'inject') { -%>
<% include modules/directive.spec.header.ts %>
<% } -%>
describe('<%- directiveName %> directive', () => {
  it('should...', <%- modules === 'webpack' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
  }));
});
