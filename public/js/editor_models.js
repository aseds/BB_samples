var Vehicle = Backbone.Model.extend({
	dump: function() {
		console.log(JSON.stringify(this.toJSON()));
	}
});

var v = new Vehicle({type: 'car'});

v.dump();
// >> {"type":"car"}


v.set('color', 'blue');
v.dump();
// >> {"type":"car","color":"blue"}

v.set({
	description: "<script>alert('script injection');</script>",
	weight: 1750
});

v.dump()
// >> {"type":"car","color":"blue","description""<script>alert("script injection");</script>","weight":1750}


 // using the 'escape' method so there is no alert!
$('body').append(v.escape('description'));