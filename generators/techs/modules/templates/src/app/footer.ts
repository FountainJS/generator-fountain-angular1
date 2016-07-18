export const footer: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/footer.html'
<% } else { -%>
  template: require('./footer.html')
<% } -%>
};
