ServiceManager.module("ProvidersApp", function(ProvidersApp, ServiceManager, Backbone, Marionette, $, _) {
	ProvidersApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"providers": "listProviders",
			"providers/:id": "showProvider"
		}
	});
	var API = {
		listProviders: function() {
			ProvidersApp.List.Controller.listProviders();
		},
		showProvider: function(id) {
			ProvidersApp.Show.Controller.showProvider(id);
		}
	};

	ServiceManager.on("providers:list", function() {
		ServiceManager.navigate("providers");
		API.listProviders();
	});

	ServiceManager.on("provider:show", function(id) {
		debugger;
		ServiceManager.navigate("providers/" + id);
		API.showProvider(id);
	});

	ServiceManager.addInitializer(function() {
		new ProvidersApp.Router({
			controller: API
		});
	});
});