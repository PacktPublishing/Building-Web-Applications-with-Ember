// app/controllers/application.js
import Ember from 'ember';

const LineItem = Ember.Object.extend({
	description: 'Some text',
	date: new Date(),
	amount: 0,
	isExpense: true
})

export default Ember.Controller.extend({
	lineItems: [
		LineItem.create({ description: 'Rent Payment', date: new Date(2017, 10, 3), amount: 900}),
		LineItem.create({ description: 'Dinner', date: new Date(2017, 10, 4), amount: 100}),
		LineItem.create({ description: 'Fuel', date: new Date(2017, 10, 5), amount: 150}),
	],
	lineItemsOutput: Ember.computed('lineItems.[]', function(){
		let lineItems = this.get('lineItems'),
		output = '';

		lineItems.forEach((item) => {
			output += `Description: ${item.get('description')}-`;
			output += `Date: ${item.get('date')}-`;
			output += `Amount: ${item.get('amount')}-`;
			output += `Expense: ${item.get('isExpense')}`;
		});
		return output;
	})
});



// app/templates/application.hbs
{{lineItemsOutput}}
