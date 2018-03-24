import Controller from '@ember/controller';
import Object, { computed } from '@ember/object';

const LineItem = Object.extend({
  init(){
    this._super(...arguments);
    this.set('date', new Date());
  },
  description: 'Some text',
  amount: 0,
  isExpense: true
});

export default Controller.extend({
  welcomeText: "Welcome, I'm your Expenze Buddy!",
  init(){
    this._super(...arguments);
    this.set('lineItems', [
      LineItem.create({ description: 'Rent Payment', date: new Date(2017, 10, 3), amount: 900}),
      LineItem.create({ description: 'Dinner', date: new Date(2017, 10, 4), amount: 100}),
      LineItem.create({ description: 'Fuel', date: new Date(2017, 10, 5), amount: 150})
      ]
    )
  },
  lineItemsOutput: computed('lineItems.[]', function(){
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
