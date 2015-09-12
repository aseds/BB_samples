var model = new Backbone.Model();

var Vehicle = Backbone.Model.extend({
	initialize: function() {
		console.log('vehicle created');
	}
});

var car = new Vehicle();
