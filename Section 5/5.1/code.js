$ ember generate component line-item-row

// app/templates/index.hbs
{{#each sortedLineItems as |lineItem|}}
  {{line-item-row model=lineItem totalAmount=totalAmount}}
{{/each}}

// app/components/line-item-row.js
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr'
});
