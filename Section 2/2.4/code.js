// app/controllers/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
	...
	actions: {
		addNewLineItem(){
			let newLineItem = LineItem.create({
				description: this.get('newDescription'),
				date: this.get('newDate'),
				amount: this.get('newAmount'),
				isExpense: this.get('newIsExpense'),
			});
			this.get('lineItems').pushObject(newLineItem);
			this.setProperties({
				newDescription: '',
				newDate: '',
				newAmount: '',
				newIsExpense: false,
			})
		}
	}
});

// app/templates/application.hbs
<tfoot>
  <tr>
    <td>
      {{input type="text" value=newDescription placeholder="Description"}}
    </td>
    <td>
      {{input type="date" value=newDate placeholder="Date"}}
    </td>
    <td>
      {{input type="text" value=newAmount placeholder="Amount"}}
      <label>
        {{input type="checkbox" checked=newIsExpense}}
        Is an Expense
      </label>
    </td>
  </tr>
  <tr>
    <td colspan="3">
      <button {{action 'addNewLineItem'}} class="btn btn-default">Add Line Item</button>
    </td>
  </tr>
</tfoot>
