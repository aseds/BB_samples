var Vehicle = Backbone.Model.extend({});

var ford = new Vehicle({
	type: 'car'
});

console.log(ford.has('type')); // true
console.log(ford.has('year')); // false

