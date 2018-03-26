import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	classNameBindings: ['isExpense:expense:info'],
	isExpense: Ember.computed.alias('model.isExpense'),
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
