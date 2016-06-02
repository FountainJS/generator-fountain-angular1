function <%- directiveName %>() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    link: (scope, element, attrs) => {},
    controller: () => {},
    controllerAs: 'ctrl'
  };
}

<% if (modules === 'inject') { -%>
<% include inject/directive.ts %>
<% } else { -%>
<% include modules/directive.ts %>
<% } -%>
