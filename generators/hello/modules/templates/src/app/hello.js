module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: '<%- templateUrl %>'
<% } else { -%>
  template: require('./hello.html')
<% } -%>
};
