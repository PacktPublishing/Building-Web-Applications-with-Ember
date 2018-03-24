import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  totalAmount: computed('model.@each.amount', function(){
          return this.get('model').reduce((previousValue, item) =>{
                  return parseFloat(item.get('amount')) + previousValue;
          }, 0);
  }),
  categories: computed(function(){
    return this.get('store').findAll('category');
  }),
  actions: {
    changeCategory(lineItem, category){
      lineItem.set('category', category);
    },
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
