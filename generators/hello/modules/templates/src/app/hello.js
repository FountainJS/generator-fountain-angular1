module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: '<%- templateUrl %>',
<% } else { -%>
  template: require('./hello.html'),
<% } -%>
  controller: function () {
    this.hello = 'Hello World!';
  }
};
