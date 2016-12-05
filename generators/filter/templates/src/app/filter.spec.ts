<% if (modules !== 'inject') { -%>
<% include modules/filter.spec.header.ts %>
<% } -%>
describe('<%- filterName %> filter', () => {
<% if (modules === 'inject') { -%>
<% include inject/filter.spec.ts %>
<% } else { -%>
<% include modules/filter.spec.ts %>
<% } -%>
  it('should...', <%- modules === 'webpack' ? 'angular.mock.' : '' %>inject(<%- filterName %>Filter => {
    expect(<%- filterName %>Filter('Hello')).toBe(0);
  }));
});
