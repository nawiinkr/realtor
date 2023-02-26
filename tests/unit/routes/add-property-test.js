import { module, test } from 'qunit';
import { setupTest } from 'realtor/tests/helpers';

module('Unit | Route | add-property', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:add-property');
    assert.ok(route);
  });
});
