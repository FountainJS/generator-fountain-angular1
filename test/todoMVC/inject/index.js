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
  context = TestUtils.mock('todoMVC/inject');
  require('../../../generators/todoMVC/inject/index');
  process.chdir(path.resolve(__dirname, '../../../'));
});

test(`Add 'todomvc-app-css' to package.json dependencies`, () => {
  TestUtils.call(context, 'configuring');
  expect(context.mergeJson['package.json'].dependencies['todomvc-app-css']).to.equal('^2.0.6');
});

test(`Call this.copyTemplate 24 times`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing.src', {
    version: require('../../../package.json').version,
    date: new Date().toString()
  });
  expect(spy).to.have.been.called.exactly(files.length);
  files.filter(file => file !== 'src/index.css').forEach(file => t.true(context.copyTemplate[file].length > 0));
});
