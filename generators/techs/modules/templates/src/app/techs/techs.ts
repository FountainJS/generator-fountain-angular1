class Tech {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string
  ) {}
}

<% if (modules === 'webpack') { -%>
/** @ngInject */
<% } -%>
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

export const techs = {
  templateUrl: 'app/techs/techs.html',
<% if (modules === 'systemjs') { -%>
  controller: ['$http', TechsController]
<% } else { -%>
  controller: TechsController
<% } -%>
};
