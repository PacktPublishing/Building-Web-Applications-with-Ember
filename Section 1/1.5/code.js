// Terminal
$ ember generate controller application

// app/controllers/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
	firstName: 'Johnny',
	lastName: 'Cash',
	fullName: Ember.computed('firstName', 'lastName', {
		get(){
			return `${this.get('firstName')} ${this.get('lastName')}`;
		},
		set(key, value){
			let [firstName, lastName] = value.split(/\s+/);
			this.set('firstName', firstName);
			this.set('lastName', lastName);
			return value;
		}
	})
});


// app/templates/application.hbs
<p>{{firstName}}</p>
<p>{{lastName}}</p>
<p>{{fullName}}</p>
{{input type="text" value=firstName}}
{{input type="text" value=lastName}}
<br/>
{{input type="text" value=fullName}}
