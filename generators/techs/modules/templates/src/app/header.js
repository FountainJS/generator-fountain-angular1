module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/header.html'
<% } else { -%>
  template: require('./header.html')
<% } -%>
};
