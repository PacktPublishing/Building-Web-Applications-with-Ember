import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['sort'],
  sort: null,
  sortedLineItems: computed('model', 'sort', function(){
    let sort = this.get('sort');
    if(sort){
      return this.get('model').sortBy(sort);
    }
    return this.get('model');
  }),
  totalAmount: computed('model.@each.amount', function(){
          return this.get('model').reduce((previousValue, item) =>{
                  return parseFloat(item.get('amount')) + previousValue;
          }, 0);
  }),
  categories: computed(function(){
    return this.get('store').findAll('category');
  }),
  actions: {
    addNewLineItem(){
      this.get('store').createRecord('line-item');
    },
    deleteLineItem(lineItem){
      lineItem.destroyRecord();
    },
    saveLineItem(lineItem){
      lineItem.save();
    }
  }
});
