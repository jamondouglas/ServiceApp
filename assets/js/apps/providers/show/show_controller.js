ServiceManager.module('ProvidersApp.Show', function(Show, ServiceManager, Backbone, Marionette, $, _) {

	Show.Controller = {
		showProvider: function(id) {
			var providers = ServiceManager.request("provider:entities");
			var provider = providers.get(id);
			var showProviderView;
			if (provider === undefined) {
				showProviderView = new Show.MissingProvider({});
			} else {
				showProviderView = new Show.Provider({
					model: provider
				});
			}
			ServiceManager.mainRegion.show(showProviderView);
		}
	};
});