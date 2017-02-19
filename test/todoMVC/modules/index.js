const path = require('path');
const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

const files = [
  'src/index.html',
  'src/index.js',
  'src/index.css',
  'src/app/components/Footer.js',
  'src/app/components/Footer.spec.js',
  'src/app/components/Footer.html',
  'src/app/components/Header.js',
  'src/app/components/Header.spec.js',
  'src/app/components/Header.html',
  'src/app/components/MainSection.js',
  'src/app/components/MainSection.spec.js',
  'src/app/components/MainSection.html',
  'src/app/components/TodoItem.js',
  'src/app/components/TodoItem.spec.js',
  'src/app/components/TodoItem.html',
  'src/app/components/TodoTextInput.js',
  'src/app/components/TodoTextInput.spec.js',
  'src/app/components/TodoTextInput.html',
  'src/app/constants/TodoFilters.js',
  'src/app/constants/VisibilityFilters.js',
  'src/app/containers/App.js',
  'src/app/containers/App.html',
  'src/app/todos/todos.js',
  'src/app/todos/todos.spec.js'
];

test.before(() => {
  context = TestUtils.mock('todoMVC/modules');
  require('../../../generators/todoMVC/modules/index');
  process.chdir(path.resolve(__dirname, '../../../'));
});

test(`Add 'todomvc-app-css' to package.json dependencies`, () => {
  TestUtils.call(context, 'configuring');
  expect(context.mergeJson['package.json'].dependencies['todomvc-app-css']).to.equal('^2.0.6');
});

test(`Call this.copyTemplate 24 times when js is different of 'typescript'`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing.src', {
    js: 'babel',
    version: require('../../../package.json').version,
    date: new Date().toString()
  });
  expect(spy).to.have.been.called.exactly(files.length);
  files.filter(file => file !== 'src/index.css').forEach(file => t.true(context.copyTemplate[file].length > 0));
});

test(`Call this.copyTemplate 25 times when js is 'typescript'`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing.src', {
    framework: 'angular1',
    js: 'typescript',
    version: require('../../../package.json').version,
    date: new Date().toString()
  });
  expect(spy).to.have.been.called.exactly(files.length + 1);
  files.filter(file => file !== 'src/index.css').forEach(file => t.true(context.copyTemplate[file].length > 0));
  t.true(context.copyTemplate['src/app/assign.js'].length > 0);
});

test(`Not add 'src' prefix to templateUrl when modules is 'webpack'`, t => {
  context.props.modules = 'webpack';
  TestUtils.call(context, 'writing.src');
  t.true(context.copyTemplate['src/app/components/Footer.spec.js'].indexOf(`'app/components/Footer.html'`) > -1);
});

test(`Add 'src' prefix to templateUrl when modules is 'systemjs'`, t => {
  context.props.modules = 'systemjs';
  TestUtils.call(context, 'writing.src');
  t.true(context.copyTemplate['src/app/components/Footer.spec.js'].indexOf(`'src/app/components/Footer.html'`) > -1);
});
