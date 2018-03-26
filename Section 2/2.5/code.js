// app/controllers/application.js
...
export default Ember.Controller.extend({
      totalAmount: Ember.computed('lineItems.[]', function(){
              return this.get('lineItems').reduce((previousValue, item) =>{
                      return parseFloat(item.get('amount')) previousValue;
              }, 0);
      }),
      ...
  });

// app/templates/application.hbs
{{#each lineItems as |lineItem|}}
	...
	<td>{{percentage lineItem.amount totalAmount}}</td>
{{/each}}

// app/helpers/percentage.js
import Ember from 'ember';

export function percentage(params/*, hash*/) {
  let [amount, total] = params;
  return (amount * 100 / Math.max(total, 1)).toFixed(2);
}

export default Ember.Helper.helper(percentage);
