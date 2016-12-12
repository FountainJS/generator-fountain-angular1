module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: '<%- templateUrl %>',
<% } else { -%>
  template: require('<%- relativeTemplateUrl %>'),
<% } -%>
  controller: <%- componentName %>Controller
};
