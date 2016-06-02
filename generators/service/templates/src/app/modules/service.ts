export default <%- serviceName %>;
<% if (modules === 'systemjs') { -%>

<%- serviceName %>.$inject = ['$http'];
<% } -%>
