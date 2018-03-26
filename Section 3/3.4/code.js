$ ember install ember-power-select

// app/controllers/application.js
export default Ember.Controller.extend({
	...
	categories: Ember.computed(function(){
		return this.get('store').findAll('category');
	}),
	actions: {
		changeCategory(lineItem, category){
			lineItem.set('category', category);
		},
	}
	...

// app/models/category.js
import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	lineItems: DS.hasMany('line-item')
});

// app/models/line-item.js
...
export default DS.Model.extend(Validations, {
   ...
	isExpense: DS.attr('boolean', { defaultValue: true }),
	category: DS.belongsTo('category')
});

// app/styles/app.scss
@import "bootstrap";

@import "ember-power-select";

