// (function() {
	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({
		tagName: 'div',
		className: 'rectangle',
		
		render: function(){
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
	}

	var props2 = {
		width: 200,
		height: 20,
		position: {
			x: 100,
			y: 100
		},
		color: 'grey',
	}

	var myRectangle1 = new Rectangle(props1);
	var myRectangle2 = new Rectangle(props2);

	var myView1 = new RectangleView({model: myRectangle1});
	var myView2 = new RectangleView({model: myRectangle2});

	var myRenderedElement1 = myView1.render().el;
	var myRenderedElement2 = myView2.render().el;

	$('#canvas').append(myRenderedElement1);
	$('#canvas').append(myRenderedElement2);







// })();