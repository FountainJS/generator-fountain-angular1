export const title: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/title.html'
<% } else { -%>
  template: require('./title.html')
<% } -%>
};
