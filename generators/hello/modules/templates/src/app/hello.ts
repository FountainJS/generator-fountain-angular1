export const hello: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: '<%- templateUrl %>'
<% } else { -%>
  template: require('./hello.html')
<% } -%>
};
