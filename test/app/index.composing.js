const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  context.composeWith = () => {};
  require('../../generators/app/index');
});

test(`Call this.composeWith twice when modules is 'webpack'`, () => {
  const spy = chai.spy.on(context, 'composeWith');
  context.props = {modules: 'webpack', sample: 'techs'};
  TestUtils.call(context, 'composing', {modules: context.props.modules, sample: context.props.sample, router: 'uirouter'});
  const options = {
    framework: context.props.framework,
    modules: context.props.modules,
    js: context.props.js,
    ci: context.props.ci,
    css: context.props.css,
    router: context.props.router,
    sample: context.props.sample,
    skipInstall: context.props.skipInstall,
    skipCache: context.props.skipCache
  };
  expect(spy).to.have.been.called.twice();
  expect(spy).to.have.been.called.with(require.resolve('../../generators/techs/modules'), options);
  expect(spy).to.have.been.called.with(require.resolve('generator-fountain-gulp/generators/app'), options);
});

test(`Call this.composeWith twice when modules is 'inject'`, () => {
  const spy = chai.spy.on(context, 'composeWith');
  context.props = {modules: 'inject', sample: 'techs'};
  TestUtils.call(context, 'composing', {modules: context.props.modules, sample: context.props.sample, router: 'uirouter'});
  const options = {
    framework: context.props.framework,
    modules: context.props.modules,
    js: context.props.js,
    ci: context.props.ci,
    css: context.props.css,
    router: context.props.router,
    sample: context.props.sample,
    skipInstall: context.props.skipInstall,
    skipCache: context.props.skipCache
  };
  expect(spy).to.have.been.called.twice();
  expect(spy).to.have.been.called.with(require.resolve('../../generators/techs/inject'), options);
  expect(spy).to.have.been.called.with(require.resolve('generator-fountain-gulp/generators/app'), options);
});
