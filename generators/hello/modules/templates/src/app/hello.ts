export const hello: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: '<%- templateUrl %>',
<% } else { -%>
  template: require('./hello.html'),
<% } -%>
  controller: function () { // eslint-disable-line babel/object-shorthand
    this.hello = 'Hello World!';
  }
};
