ServiceManager.module("ProvidersApp.List", function(List, ServiceManager, Backbone, Marionette, $, _) {
	List.Controller = {

		listProviders: function() {
			var providers = ServiceManager.request("provider:entities");

			var providersListView = new List.Providers({
				collection: providers
			});

			providersListView.on("itemview:provider:delete",function(childView,model){
				providers.remove(model);
			});

			providersListView.on("itemview:provider:show",function(childView, model){
				debugger;
				ServiceManager.navigate("providers/"+model.get("id"));
				ServiceManager.trigger("provider:show", model);
			});
			ServiceManager.mainRegion.show(providersListView);
		}
	};
});