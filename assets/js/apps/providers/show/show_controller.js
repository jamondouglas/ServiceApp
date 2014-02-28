ServiceManager.module('ProvidersApp.Show',function(Show,ServiceManager,Backbone,Marionette,$,_) {

	Show.Controller = {
		showProvider:function(model){
			/*var providers = ServiceManager.request("provider:entities");
			var provider = providers.get(id);*/
			var showProvider = new Show.Provider({
				model:model
			});
			ServiceManager.mainRegion.show(showProvider);
		}
	};
});
