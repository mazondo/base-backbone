function log(message) {
	console.log(message);
}

var MainView = Backbone.View.extend({

	el: $("#main-content")
	//NOTE : typically want to do some kind of "switchView" method that handles switching all view contexts and clearing out old ones

});

var Workspace = Backbone.Router.extend({
	routes: {
		"" : "index"
	},

	initialize: function() {
		this.mainView = new MainView();
		this.mainView.router = this;
	},

	index: function() {
		log("index!");
	}
});

$(function() {
	var workspace = new Workspace();
	Backbone.history.start();
});