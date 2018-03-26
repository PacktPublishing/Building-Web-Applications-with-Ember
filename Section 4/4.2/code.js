// $ ember install torii
// $ mkdir -p app/torii-adapters
// $ touch app/torii-adapters/application.js


// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
	...
    session: Ember.inject.service(),
    beforeModel() {
        return this.get('session').fetch().catch(function() {});
    },
    actions: {
        signIn() {
            let email = this.controllerFor('application').get('userEmail'),
            password = this.controllerFor('application').get('userPassword');
            this.get('session').open('firebase',
                {
                    provider: 'password',
                    email: email,
                    password: password
                }).then(function(data) {
            console.log(data.currentUser);
          });
        },
        signOut() {
          this.get('session').close();
        }
    }
});
