<% if (modules === 'inject') { -%>
angular
  .module('app')
  .component('app', {
    templateUrl: '<%- templateUrl %>'
  });
<% } else { -%>
module.exports = {
  templateUrl: '<%- templateUrl %>'
};
<% } -%>
