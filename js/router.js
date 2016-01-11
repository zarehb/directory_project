var App = Backbone.Router.extend({
	routes: {
		"": "index",
		"tasks": "tasks"
	},
	index: function() {

		var mainModel = new MainModel({name: "Zareh", title: "Developer"});


		var mainView = new MainView({model: mainModel});

		//mainModel.set("title","CTO");
		//mainModel.attributes.title = "CTO";
		setTimeout(function() {
			mainModel.set("title","CTO");
			mainView.render();
			$("#wrapper-2").html(mainView.el);
		},1000)

	},
	tasks: function() {
		alert("tasks")
	}
});