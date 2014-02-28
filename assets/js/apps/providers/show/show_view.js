ServiceManager.module("ProvidersApp.Show", function(Show,ServiceManager,Backbone,Marionette,$,_){
	Show.Provider = Marionette.ItemView.extend({
		template:"#provider-view-csss"
	});

});