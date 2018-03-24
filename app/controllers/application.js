import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  welcomeText: "Welcome, I'm your Expenze Buddy!",
  totalAmount: computed('model.@each.amount', function(){
          return this.get('model').reduce((previousValue, item) =>{
                  return parseFloat(item.get('amount')) + previousValue;
          }, 0);
  }),
  actions: {
    deleteLineItem(lineItem){
      lineItem.destroyRecord();
    },
    addNewLineItem(){
      this.get('store').createRecord('line-item');
    },
    saveLineItem(lineItem){
      lineItem.save();
    }
  }
});
