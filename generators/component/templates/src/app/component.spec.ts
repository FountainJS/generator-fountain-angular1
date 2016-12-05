<% if (modules !== 'inject') { -%>
<% include modules/component.spec.header.ts %>
<% } -%>
describe('<%- componentName %> component', () => {
<% if (modules === 'inject') { -%>
<% include inject/component.spec.ts %>
<% } else { -%>
<% include modules/component.spec.ts %>
<% } -%>
  it('should...', <%- modules === 'webpack' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<<%- componentName %>></<%- componentName %>>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
