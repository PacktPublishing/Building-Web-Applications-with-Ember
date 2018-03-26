// app/controllers/application.js
import Ember from 'ember';

const LineItem = Ember.Object.extend({
	description: 'Some text',
	date: new Date(),
	amount: 0,
	isExpense: true
})

export default Ember.Controller.extend({
	welcomeText: "Welcome, I'm your Expenze Buddy!",
});

// app/templates/application.hbs
<h1>{{welcomeText}}</h1>