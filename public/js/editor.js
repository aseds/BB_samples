// (function() {

	var Rectangle = Backbone.Model.extend({
		defaults: {
			item_id: this.cid
		}
	});

	var RectangleView = Backbone.View.extend({
		tagName: 'div',
		className: 'rectangle',

		events: {
			'click': 'move'
		},
		render: function(){
			console.log(this.model.cid);
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this;
		},
		setPosition: function() {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},
		setDimensions: function() {
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},
		setColor: function() {
			this.$el.css('background-color', this.model.get('color'));
		},
		move: function() {
			this.$el.css('left', this.$el.position().left + 10);
		}

	});

	var props1 = {
		width: 100,
		height: 60,
		position: {
			x: 300,
			y: 150
		},
		color: 'tomato',
		item_id: 1
	}
	var props2 = {
		width: 200,
		height: 20,
		position: {
			x: 100,
			y: 100
		},
		color: 'grey',
		item_id: 2
	}
	var props3 = {
		width: 140,
		height: 160,
		position: {
			x: 200,
			y: 300
		},
		color: 'blue',
		item_id: 3
	}

	var models = [
		new Rectangle(props1),
		new Rectangle(props2),
		new Rectangle(props3)
	];

	_(models).each(function(model) {
		var myView = new RectangleView({model: model});
		var myRenderedElement = myView.render().el;
		$('#canvas').append(myRenderedElement)
	});






// })();