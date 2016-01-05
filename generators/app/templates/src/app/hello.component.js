<% if (modules === 'inject') { -%>
angular
  .module('app')
  .component('hello', {
    templateUrl: '<%- templateUrl %>'
  });
<% } else { -%>
module.exports = {
  templateUrl: '<%- templateUrl %>'
};
<% } -%>
