import { module, test } from 'qunit';
import { setupTest } from 'realtor/tests/helpers';

module('Unit | Controller | add-property', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:add-property');
    assert.ok(controller);
  });
});
