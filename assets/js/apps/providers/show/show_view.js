ServiceManager.module("ProvidersApp.Show", function(Show,ServiceManager,Backbone,Marionette,$,_){
	Show.Provider = Marionette.ItemView.extend({
		template:"#provider-view-csss",

		events:{
		"click button.js-home": "homeClicked"
	},

	homeClicked:function(e){
		e.preventDefault();
		ServiceManager.trigger("providers:list");
	}
	});

	Show.MissingProvider = Marionette.ItemView.extend({
		template:"#missing-contact-view",

		events:{
			"click button.js-home": "homeClicked"
		},

		homeClicked:function(e){
		e.preventDefault();
		ServiceManager.trigger("providers:list");
	}
	});
});