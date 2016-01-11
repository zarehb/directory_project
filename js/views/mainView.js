var MainView = Backbone.View.extend({
	events: {
		"click #add-btn":"add"
	},
	add: function() {
		alert("Add");
	},
	initialize: function() {
		this.listenTo(this.model,"change", this.render);
	},
	render: function() {
		$(this.el).html( _.template("<p>Hello <%= name %>, you are a <%= title %><br><button id='add-btn'>click me</button></p>")(this.model.toJSON()) );

		return this;
	}
});