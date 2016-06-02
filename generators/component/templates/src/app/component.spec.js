<% if (modules !== 'inject') { -%>
<% include modules/component.spec.header.js %>
<% } -%>
describe('<%- componentName %> component', function () {
<% if (modules === 'inject') { -%>
<% include inject/component.spec.js %>
<% } else { -%>
<% include modules/component.spec.js %>
<% } -%>
  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<<%- componentName %>></<%- componentName %>>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
