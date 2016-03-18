/// <reference path="../../../typings/main.d.ts" />

describe('tech component', function () {
  beforeEach(module('app', function ($provide: ng.auto.IProvideService) {
    $provide.factory('fountainTech', function () {
      return {
        templateUrl: 'app/techs/tech.html'
      };
    });
  }));

  interface IMyScope extends ng.IScope {
    fixture: any;
  }

  it('should render Gulp', inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const $scope: IMyScope = <IMyScope> $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'https://raw.githubusercontent.com/FountainJS/generator-fountain-webapp/master/docs/assets/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    const element = $compile('<fountain-tech tech=\"fixture\"></fountain-tech>')($scope);
    $scope.$digest();
    const tech = element.find('h3');
    expect(tech.html().trim()).toEqual('Gulp');
  }));
});
