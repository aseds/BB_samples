var A = Backbone.Model.extend({
	initialize: function() {
		console.log('initialize A');
	},

	asString: function () {
		return JSON.stringify(this.toJSON());
	}
});

var a = new A({
	one: '1',
	two: '2'
});

console.log(a.asString());

var B = A.extend({});

var b = new B({
	three: '3'
});

console.log(b.asString());