/* eslint no-unused-expressions: 0 */

const expect = require('chai').expect;
const TestUtils = require('fountain-generator').TestUtils;

describe('generator fountain gulp partials', () => {
  beforeEach(function () {
    this.context = TestUtils.mock('hello/modules');
    require('../generators/hello/modules/index');
  });

  it('should remove angular.mock prefix with TS and systemjs', function () {
    const getFile = () => this.context.copyTemplate['src/app/hello.spec.js'];
    TestUtils.call(this.context, 'writing', {
      framework: 'angular1',
      css: 'scss',
      router: 'none'
    });
    expect(getFile()).to.match(/angular\.mock\.module\('fountainHello/);
    expect(getFile()).to.match(/angular\.mock\.inject\(function/);
    TestUtils.call(this.context, 'writing', {
      modules: 'systemjs',
      js: 'typescript',
      framework: 'angular1',
      css: 'scss',
      router: 'none'
    });
    expect(getFile()).not.to.match(/angular\.mock\.module\('fountainHello/);
    expect(getFile()).not.to.match(/angular\.mock\.inject\(function/);
    expect(getFile()).to.match(/module\('fountainHello/);
    expect(getFile()).to.match(/inject\(\(/);
  });
});
