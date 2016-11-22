<% if (modules !== 'inject') { -%>
<% include modules/service.spec.header.ts %>
<% } -%>
describe('<%- serviceName %> service', () => {
<% if (modules === 'inject') { -%>
<% include inject/service.spec.ts %>
<% } else { -%>
<% include modules/service.spec.ts %>
<% } -%>
  it('should', <%- modules === 'webpack' ? 'angular.mock.' : '' %>inject((<%- serviceName %>: <%- serviceName %>) => {
    expect(<%- serviceName %>.getData()).toEqual(3);
  }));
});
