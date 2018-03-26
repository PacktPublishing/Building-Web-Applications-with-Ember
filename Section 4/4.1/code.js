$ ember generate route categories
$ ember generate template index
$ ember g controller index


// app/templates/application.hbs
...
	<ul class="nav navbar-nav navbar-right">
		<li>
			{{#link-to 'categories'}}Categories{{/link-to}}
		</li>
	...