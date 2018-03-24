import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  welcomeText: "Welcome, I'm your Expenze Buddy!",
  totalAmount: computed('model.[]', function(){
          return this.get('model').reduce((previousValue, item) =>{
                  return parseFloat(item.get('amount')) + previousValue;
          }, 0);
  }),
  actions: {
    deleteLineItem(lineItem){
      lineItem.destroyRecord();
    },
    addNewLineItem(){
      let lineItem = this.get('store').createRecord('line-item', {
        description: this.get('newDescription'),
        date: new Date(this.get('newDate')),
        amount: this.get('newAmount'),
        isExpense: this.get('newIsExpense'),
      });
      lineItem.save();
      this.setProperties({
        newDescription: '',
        newDate: '',
        newAmount: '',
        newIsExpense: false,
      })
    }
  }
});
