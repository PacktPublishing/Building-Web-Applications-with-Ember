// $ ember install ember-cli-bootstrap-sassy
// $ ember install ember-cli-sass

// app/styles/app.scss
@import "bootstrap";


// app/templates/application.hbs
<table class="table table-striped">
	<thead>
		<tr>
			<th>Description</th>
			<th>Date</th>
			<th>Amount</th>
		</tr>
	</thead>
	<tbody>
		{{#each lineItems as |lineItem|}}
			<tr class="{{unless lineItem.isExpense 'info'}}">
				<td>{{lineItem.description}}</td>
				<td>{{lineItem.date}}</td>
				<td>{{lineItem.amount}}</td>
			</tr>
		{{/each}}
	</tbody>
</table>


