class TechsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
  }
}

export const techs = {
  templateUrl: 'app/techs/techs.html',
  controller: TechsController
};
