class Tech {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string
  ) {}
}

/** @ngInject */
class TechsController {
  public techs: Tech[];

  constructor(private $http: angular.IHttpService) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data as Tech[];
      });
  }
}

angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app/techs/techs.html',
    controller: TechsController
  });
