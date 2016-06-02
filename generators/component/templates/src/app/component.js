function <%- componentName %>Controller() {
  this.text = 'My brand new component!';
}

<% if (modules === 'inject') { -%>
<% include inject/component.js %>
<% } else { -%>
<% include modules/component.js %>
<% } -%>
