<% if (modules === 'inject') { -%>
angular
  .module('app')
  .component('hello', {
    templateUrl: '<%- templateUrl %>'
  });
<% } else { -%>
export const hello = {
  templateUrl: '<%- templateUrl %>'
};
<% } -%>
