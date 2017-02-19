const path = require('path');
const test = require('ava');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
  process.chdir(path.resolve(__dirname, '../../'));
});

test.beforeEach(() => {
  context.copyTemplate['src/routes.js'] = null;
  context.copyTemplate['src/index.html'] = null;
});

test(`Write 'routes.js' and 'index.html'`, t => {
  context.props = {router: 'uirouter'};
  TestUtils.call(context, 'writing', {sample: 'techs'});
  t.true(context.copyTemplate['src/routes.js'].length > 0);
  t.true(context.copyTemplate['src/index.html'].length > 0);
});

test(`should write 'index.html' but shouldn't write 'routes.js'`, t => {
  context.props = {router: 'none'};
  TestUtils.call(context, 'writing', {sample: 'techs'});
  t.is(context.copyTemplate['src/routes.js'], null);
  t.true(context.copyTemplate['src/index.html'].length > 0);
});
