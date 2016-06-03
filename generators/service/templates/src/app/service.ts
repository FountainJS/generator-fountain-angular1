class <%- serviceName %> {
  getData() {
    return 1 + 2;
  }
}

<% if (modules === 'inject') { -%>
<% include inject/service.ts %>
<% } else { -%>
<% include modules/service.ts %>
<% } -%>

