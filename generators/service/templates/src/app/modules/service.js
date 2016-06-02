module.exports = <%- serviceName %>;
<% if (modules === 'systemjs') { -%>

<%- serviceName %>.$inject = ['$http'];
<% } -%>
