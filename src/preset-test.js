import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as form8ionPreset from '../thirdparty-wrappers/form8ion-babel-preset';
import buildConfig from '.';

suite('babel preset', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(form8ionPreset, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the form8ion preset is extended', () => {
    const options = any.simpleObject();
    const config = any.simpleObject();
    form8ionPreset.default.withArgs(options).returns(config);

    assert.equal(buildConfig(options), config);
  });
});
