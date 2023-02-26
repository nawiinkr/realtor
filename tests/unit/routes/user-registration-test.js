import { module, test } from 'qunit';
import { setupTest } from 'realtor/tests/helpers';

module('Unit | Route | user-registration', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user-registration');
    assert.ok(route);
  });
});
