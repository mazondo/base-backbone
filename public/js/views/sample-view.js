var AppListView = Backbone.View.extend({
	tagName: "div",
	className: "app",
	template: _.template($("#app-list-template").html()),

	events: {
		"click .activate" : "activate"
	},

	initialize: function() {
		this.listenTo(this.model, "all", this.render);
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON() ));
		return this;
	},

	kill: function() {
		this.remove();
		this.unbind();
	}
});