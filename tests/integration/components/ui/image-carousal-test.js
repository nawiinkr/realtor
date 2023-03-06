import { module, test } from 'qunit';
import { setupRenderingTest } from 'realtor/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/image-carousal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::ImageCarousal />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Ui::ImageCarousal>
        template block text
      </Ui::ImageCarousal>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
