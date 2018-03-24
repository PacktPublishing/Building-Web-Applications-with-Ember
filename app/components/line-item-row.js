import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'tr',
  classNameBindings: ['isExpense:expense:info'],
  isExpense: alias('model.isExpense'),
  actions: {
    changeCategory(model, category){
      model.set('category', category);
    },
    deleteLineItem(model){
      model.destroyRecord();
    },
    saveLineItem(model){
      model.save();
    }
  }
});
