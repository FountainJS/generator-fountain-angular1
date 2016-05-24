describe('tech component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('fountainTech', function () {
      return {
        templateUrl: 'app/techs/tech.html'
      };
    });
  }));
  it('should render Gulp', angular.mock.inject(function ($rootScope, $compile) {
    var $scope = $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    var element = $compile('<fountain-tech tech="fixture"></fountain-tech>')($scope);
    $scope.$digest();
    var tech = element.find('h3');
    expect(tech.html().trim()).toEqual('Gulp');
  }));
});
