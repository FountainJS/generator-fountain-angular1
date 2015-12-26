<% if (modules) { -%>
export const hello = {
  templateUrl: 'app/hello.html'
};
<% } else { -%>
angular
  .module('app')
  .component('hello', {
    templateUrl: 'app/hello.html'
  });
<% } -%>
