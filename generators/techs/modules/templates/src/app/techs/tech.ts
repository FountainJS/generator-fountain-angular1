export const tech: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/techs/tech.html',
<% } else { -%>
  template: require('./tech.html'),
<% } -%>
  bindings: {
    tech: '<'
  }
};
