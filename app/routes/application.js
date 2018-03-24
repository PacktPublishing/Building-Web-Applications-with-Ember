import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model(){
    return this.get('store').findAll('line-item');
  },
  session: service(),
  beforeModel() {
      return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn() {
      let email = this.controllerFor('application').get('userEmail'),
      password = this.controllerFor('application').get('userPassword');
      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(() => {
        this.transitionTo('index');
      });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
