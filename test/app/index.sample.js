const test = require('ava');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('fountain-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
});

test(`Set sample of 'techs' and router of 'uirouter'`, async t => {
  context.option = () => {};
  context.prompt = () => new Promise(resolve => resolve({sample: 'techs', router: 'uirouter'}));
  TestUtils.call(context, 'prompting.sample').then(() => {
    t.is(context.props.sample, 'techs');
    t.is(context.props.router, 'uirouter');
  });
});
