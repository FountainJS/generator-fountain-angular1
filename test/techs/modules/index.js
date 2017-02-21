const path = require('path');
const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

const files = [
  'src/index.js',
  'src/index.css',
  'src/app/footer.js',
  'src/app/footer.spec.js',
  'src/app/footer.html',
  'src/app/header.js',
  'src/app/header.spec.js',
  'src/app/header.html',
  'src/app/main.js',
  'src/app/main.spec.js',
  'src/app/main.html',
  'src/app/title.js',
  'src/app/title.spec.js',
  'src/app/title.html',
  'src/app/techs/tech.js',
  'src/app/techs/tech.html',
  'src/app/techs/techs.js',
  'src/app/techs/tech.spec.js',
  'src/app/techs/techs.spec.js',
  'src/app/techs/index.js',
  'src/app/techs/techs.html'
];

test.before(() => {
  context = TestUtils.mock('techs/modules');
  require('../../../generators/techs/modules/index');
  process.chdir(path.resolve(__dirname, '../../../'));
});

test(`Call this.copyTemplate 21 times`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing.src', {
    version: require('../../../package.json').version,
    date: new Date().toString()
  });
  expect(spy).to.have.been.called.exactly(files.length);
  files.forEach(file => t.true(context.copyTemplate[file].length > 0));
});

test(`Not add 'src' prefix to templateUrl when modules is 'webpack'`, t => {
  context.props.modules = 'webpack';
  TestUtils.call(context, 'writing.src');
  t.true(context.copyTemplate['src/app/footer.spec.js'].indexOf(`'app/footer.html'`) > -1);
});

test(`Add 'src' prefix to templateUrl when modules is 'systemjs'`, t => {
  context.props.modules = 'systemjs';
  TestUtils.call(context, 'writing.src');
  t.true(context.copyTemplate['src/app/footer.spec.js'].indexOf(`'src/app/footer.html'`) > -1);
});

test('Call this.prepareTechJson', () => {
  context.prepareTechJson = () => {};
  const spy = chai.spy.on(context, 'prepareTechJson');
  TestUtils.call(context, 'writing.techs');
  expect(spy).to.have.been.called.once();
});
