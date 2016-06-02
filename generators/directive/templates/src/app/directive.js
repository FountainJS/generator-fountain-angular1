function <%- directiveName %>() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    link: function (scope, element, attrs) {},
    controller: function () {},
    controllerAs: 'ctrl'
  };
}

<% if (modules === 'inject') { -%>
<% include inject/directive.js %>
<% } else { -%>
<% include modules/directive.js %>
<% } -%>
