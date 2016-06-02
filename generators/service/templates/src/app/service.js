<% if (modules === 'webpack') { -%>
<% include modules/service.ngInject.js %>
<% } -%>
function <%- serviceName %>($http) {
  this.$http = $http;
}

<%- serviceName %>.prototype.getData = function () {
  return this.$http.get('api/data/');
};

<% if (modules === 'inject') { -%>
<% include inject/service.js %>
<% } else { -%>
<% include modules/service.js %>
<% } -%>
