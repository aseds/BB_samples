var Vehicle = Backbone.Model.extend({}, // the first {} is for properties, the second {} is for class properties
	{
		summary: function() { return 'Vehicles are for traveling';}
	}
);

console.log(Vehicle.summary());