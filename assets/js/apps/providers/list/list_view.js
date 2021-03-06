ServiceManager.module("ProvidersApp.List", function(List, ServicerManager, Backbone, Marionette, $, _) {
	List.Provider = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#contact-list-item",

		events: {
			"click": "highlightName",
			"click button.js-delete": "deleteClicked",
			"click a.js-show" : "showClicked"
		},

		highlightName: function(e) {
			e.preventDefault();
			this.$el.toggleClass("info");
		},
		deleteClicked: function(e){
			e.stopPropagation();
				this.trigger("provider:delete",this.model);
		},
		showClicked:function(e){
			e.preventDefault();
			e.stopPropagation();
			this.trigger("provider:show", this.model);
		}
		//No need to have this function present in ServiceManager App
		/*remove:function(){
			var self = this;
			this.$el.fadeOut(function(){
				Marionette.ItemView.prototype.remove.call(self);
			});
		}*/
	});

	List.Providers = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover table-striped",
		template: "#contact-list",
		itemView: List.Provider,
		itemViewContainer: "tbody",

		onItemviewProviderDelete: function(){
			this.$el.fadeOut(1000, function() {
				$(this).fadeIn(1000);
			});
		}
	});
});