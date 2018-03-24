import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lineItems: DS.hasMany('line-item')
});
