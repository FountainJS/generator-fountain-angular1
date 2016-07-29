export const header: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/header.html'
<% } else { -%>
  template: require('./header.html')
<% } -%>
};
