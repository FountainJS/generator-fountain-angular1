const techsJson = [
  {
    key: 'gulp',
    title: 'Gulp',
    logo: 'http://fountainjs.io/assets/imgs/gulp.png',
    text1: 'The streaming build system',
    text2: 'Automate and enhance your workflow'
  },
  {
    key: 'react',
    title: 'React',
    logo: 'http://fountainjs.io/assets/imgs/react.png',
    text1: 'A JavaScript library for building user interfaces',
    text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
  },
  {
    key: 'angular1',
    title: 'Angular 1',
    logo: 'http://fountainjs.io/assets/imgs/angular1.png',
    text1: 'HTML enhanced for web apps!',
    text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
  }
];

describe('techs component', () => {
  beforeEach(angular.mock.module('app'));

  it('should render 3 elements <fountain-tech>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'app/techs/techs.json').respond(techsJson);
    const element = $compile('<fountain-techs></fountain-techs>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const techs = element.find('fountain-tech');
    expect(techs.length).toEqual(3);
  }));
});
