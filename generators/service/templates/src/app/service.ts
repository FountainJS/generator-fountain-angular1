class <%- serviceName %> {
<% if (modules === 'webpack') { -%>
<% include modules/service.ngInject.ts %>
<% } -%>
  constructor(private $http: angular.IHttpService) {
  }

  getData() {
    return this.$http.get('api/data/');
  }
}

<% if (modules === 'inject') { -%>
<% include inject/service.ts %>
<% } else { -%>
<% include modules/service.ts %>
<% } -%>

