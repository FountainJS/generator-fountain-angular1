describe('footer component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('fountainFooter', () => {
      return {
        templateUrl: 'app/footer.html'
      };
    });
  }));

  it('should render \'FountainJS team\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('FountainJS team');
  }));
});
