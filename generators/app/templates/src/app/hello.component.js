<% if (modules) { -%>
export const hello = {
  template: `<h1>Hello World!</h1>`
};
<% } else { -%>
angular
  .module('app')
  .component('hello', {
    template: `<h1>Hello World!</h1>`
  });
<% } -%>
