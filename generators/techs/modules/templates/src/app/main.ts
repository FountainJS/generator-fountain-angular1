export const main: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/main.html'
<% } else { -%>
  template: require('./main.html')
<% } -%>
};
