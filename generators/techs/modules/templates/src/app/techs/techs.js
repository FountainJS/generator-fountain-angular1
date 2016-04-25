module.exports = {
  templateUrl: 'app/techs/techs.html',
<% if (modules === 'systemjs') { -%>
  controller: ['$http', TechsController]
};

<% } else { -%>
  controller: TechsController
};

/** @ngInject */
<% } -%>
function TechsController($http) {
  var vm = this;

  $http
    .get('app/techs/techs.json')
    .then(function (response) {
      vm.techs = response.data;
    });
}
