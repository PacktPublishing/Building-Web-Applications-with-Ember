import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | percentage', function(hooks) {
  setupRenderingTest(hooks);

  let valueOne = 1290, valueTwo = 5020;

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('valueOne', valueOne);
    this.set('valueTwo', valueTwo);

    await render(hbs`{{percentage valueOne valueTwo}}`);

    assert.equal(this.element.textContent.trim(), (valueOne * 100/Math.max(valueTwo, 1)).toFixed(2));
  });
});
