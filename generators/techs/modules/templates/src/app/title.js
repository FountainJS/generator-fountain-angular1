module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/title.html'
<% } else { -%>
  template: require('./title.html')
<% } -%>
};
