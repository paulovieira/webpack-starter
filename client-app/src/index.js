let _ = require('underscore')

let stooges = [
	{ name: 'curly', age: 25 },
	{ name: 'moe', age: 21 },
	{ name: 'larry', age: 23 }
];

let youngest = _.chain(stooges)
	.sortBy(stooge => stooge.age)
	.map(stooge => `${ stooge.name } is ${ stooge.age }`)
	.first()
	.value();

console.log(youngest);
var x = 11;
