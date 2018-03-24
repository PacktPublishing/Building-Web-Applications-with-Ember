import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import Object from "@ember/object";

let model = Object.extend({
  description: 'sample line item',
  amount: 20
}).create();

module('Integration | Component | line-item-row', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    this.set('model', model);
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{line-item-row model=model totalAmount=100}}`);

    assert.equal(this.element.querySelector('.description').textContent.trim(), 'sample line item');

    // Template block usage:
    await render(hbs`
      {{#line-item-row model=model totalAmount=100}}
        template block text
      {{/line-item-row}}
    `);

    assert.equal(this.element.querySelector('.description').textContent.trim(), 'sample line item');
  });
});
