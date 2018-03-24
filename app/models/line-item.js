import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  date: DS.attr('date'),
  amount: DS.attr('number'),
  isExpense: DS.attr('boolean')
});
