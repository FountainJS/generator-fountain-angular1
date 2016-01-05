/* eslint no-unused-expressions: 0 */

const expect = require('chai').expect;
const TestUtils = require('fountain-generator').TestUtils;

describe('generator fountain gulp partials', () => {
  beforeEach(function () {
    this.context = TestUtils.mock();
    require('../generators/app/index');
  });

  it('should remove angular.mock prefix with TS and systemjs', function () {
    const getFile = () => this.context.copyTemplate['src/app/hello.component.spec.js'];
    TestUtils.call(this.context, 'writing', {
      framework: 'angular1',
      css: 'scss'
    });
    expect(getFile()).to.match(/angular\.mock\.module\('hello/);
    expect(getFile()).to.match(/angular\.mock\.inject\(function/);
    TestUtils.call(this.context, 'writing', {
      modules: 'systemjs',
      js: 'typescript',
      framework: 'angular1',
      css: 'scss'
    });
    expect(getFile()).not.to.match(/angular\.mock\.module\('hello/);
    expect(getFile()).not.to.match(/angular\.mock\.inject\(function/);
    expect(getFile()).to.match(/module\('hello/);
    expect(getFile()).to.match(/inject\(function/);
  });
});
