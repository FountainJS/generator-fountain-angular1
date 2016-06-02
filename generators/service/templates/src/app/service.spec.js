<% if (modules !== 'inject') { -%>
<% include modules/service.spec.header.js %>
<% } -%>
describe('<%- serviceName %> service', function () {
<% if (modules === 'inject') { -%>
<% include inject/service.spec.js %>
<% } else { -%>
<% include modules/service.spec.js %>
<% } -%>
  it('should', angular.mock.inject(function (<%- serviceName %>, $httpBackend) {
    $httpBackend.whenGET('api/data/').respond([{text: 'Hello'}]);
    <%- serviceName %>.getData().then(function (response) {
      expect(response.data.length).toEqual(1);
    });
    $httpBackend.flush();
  }));
});
