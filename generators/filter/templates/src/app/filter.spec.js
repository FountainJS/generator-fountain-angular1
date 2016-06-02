<% if (modules !== 'inject') { -%>
<% include modules/filter.spec.header.js %>
<% } -%>
describe('<%- filterName %> filter', () => {
<% if (modules === 'inject') { -%>
<% include inject/filter.spec.js %>
<% } else { -%>
<% include modules/filter.spec.js %>
<% } -%>
  it('should...', angular.mock.inject(function (<%- filterName %>Filter) {
    expect(<%- filterName %>Filter('Hello')).toBe(0);
  }));
});
