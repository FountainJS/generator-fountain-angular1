<% if (modules !== 'inject') { -%>
<% include modules/service.spec.header.js %>
<% } -%>
describe('<%- serviceName %> service', function () {
<% if (modules === 'inject') { -%>
<% include inject/service.spec.js %>
<% } else { -%>
<% include modules/service.spec.js %>
<% } -%>
  it('should', angular.mock.inject(function (<%- serviceName %>) {
    expect(<%- serviceName %>.getData()).toEqual(3);
  }));
});
