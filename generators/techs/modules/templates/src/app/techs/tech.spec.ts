import * as angular from 'angular';
import 'angular-mocks';
import {tech} from './tech';

describe('tech component', () => {
  beforeEach(() => {
    angular
      .module('fountainTech', ['<%- templateUrl %>'])
      .component('fountainTech', tech);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('fountainTech');
  });

  interface IMyScope extends ng.IScope {
    fixture: any;
  }

  it('should render Gulp', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const $scope: IMyScope = <IMyScope> $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    const element = $compile('<fountain-tech tech="fixture"></fountain-tech>')($scope);
    $scope.$digest();
    const tech = element.find('h3');
    expect(tech.html().trim()).toEqual('Gulp');
  }));
});
