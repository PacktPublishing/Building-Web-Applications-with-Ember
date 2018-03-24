import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  firstName: 'Johnny',
  lastName: 'Cash',
  fullName: computed('firstName', 'lastName', {
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
