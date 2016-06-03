function <%- serviceName %>() {
}

<%- serviceName %>.prototype.getData = function () {
  return 1 + 2;
};

<% if (modules === 'inject') { -%>
<% include inject/service.js %>
<% } else { -%>
<% include modules/service.js %>
<% } -%>
