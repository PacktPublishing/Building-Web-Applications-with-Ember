// app/routes/index.js

export default Ember.Route.extend({
    actions: {
        signIn() {
            let email = this.controllerFor('application').get('userEmail'),
            password = this.controllerFor('application').get('userPassword');
            this.get('session').open('firebase',
                {
                    provider: 'password',
                    email: email,
                    password: password
                }).then(() => {
                    this.transitionTo('index');
                });
        },

// app/templates/index.hbs
<tr>
    <th>{{#link-to 'index' (query-params sort='description')}}Description{{/link-to}}</th>
    <th>Category</th>
    <th>Date</th>
    <th>{{#link-to 'index' (query-params sort='amount')}}Amount{{/link-to}}</th>
    <th>Percentage</th>
</tr>
