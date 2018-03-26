$ ember g route categories/category


// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['sort'],
	sort: null,
	sortedLineItems: Ember.computed('model', 'sort', function(){
		let sort = this.get('sort');
		if(sort){
			return this.get('model').sortBy(sort);
		}
		return this.get('model');
	}),
});


// app/models/line-item.js
..
category: DS.belongsTo('category', { inverse: null }),
dateInput: Ember.computed({
     get(){
             return this.get('date');
     },
     set(key, value){
             this.set('date', new Date(value));
             return value;
     }
})

// app/router.js
...
 Router.map(function() {
 	this.route('categories', function() {
 		this.route('category', { path: '/:category_id' });
 	});
 });



 // app/templates/index.hbs
 ...
 <tbody>
 	{{#each sortedLineItems as |lineItem|}}
 	...
 	{{input type="date" value=lineItem.dateInput placeholder="Date"}}
 	...
