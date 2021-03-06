ServiceManager.module("Entities", function(Entities, ServiceManager, Backbone, Marionette, $, _) {

  Entities.Provider = Backbone.Model.extend({
    defaults: {
      firstName: "Please enter first name.",
      lastName: "Please enter last name",
      phoneNumber: "Please enter phone number",
      email:"Please enter email address"
    }
  });

  Entities.ProviderCollection = Backbone.Collection.extend({
    model: Entities.Provider,
    comparator: function(provider) {
      return provider.get("firstName") + " " + provider.get("lastName");
    }
  });

  var providers;

  var initializeProviders = function() {
    providers = new Entities.ProviderCollection([
        {
            firstName:"Bob",
            lastName: "James",
            phoneNumber: "1234567",
            email:"bjames@hotmail.com",
            imagePath:"./assets/images/james_bob.jpg"
          },
          {
            firstName:"Norman",
            lastName: "Connors",
            phoneNumber: "1234568",
            email:"nconnors@gmail.com",
            imagePath:"./assets/images/connors3.jpg"
          },
          {
            firstName:"Pharell",
            lastName: "Williams",
            phoneNumber: "1234569",
            email:"skateboardP@aol.com",
            imagePath:"./assets/images/Pharrell-Williams.jpg"
          }
    ]);
  };
  var API = {
    getProviderEntities: function(){
      if(providers === undefined){
        initializeProviders();
      }
      return providers;
    }
  };
  ServiceManager.reqres.setHandler("provider:entities",function(){
    return API.getProviderEntities();
  });

});


/*ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
  Entities.Contact = Backbone.Model.extend({
    urlRoot: "contacts"
  });

  Entities.configureStorage(Entities.Contact);

  Entities.ContactCollection = Backbone.Collection.extend({
    url: "contacts",
    model: Entities.Contact,
    comparator: "firstName"
  });

  Entities.configureStorage(Entities.ContactCollection);

  var initializeContacts = function(){
    contacts = new Entities.ContactCollection([
      { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
      { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
      { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
    ]);
    contacts.forEach(function(contact){
      contact.save();
    });
    return contacts.models;
  };

  var API = {
    getContactEntities: function(){
      var contacts = new Entities.ContactCollection();
      var defer = $.Deferred();
      contacts.fetch({
        success: function(data){
          defer.resolve(data);
        }
      });
      var promise = defer.promise();
      $.when(promise).done(function(contacts){
        if(contacts.length === 0){
          // if we don't have any contacts yet, create some for convenience
          var models = initializeContacts();
          contacts.reset(models);
        }
      });
      return promise;
    },

    getContactEntity: function(contactId){
      var contact = new Entities.Contact({id: contactId});
      var defer = $.Deferred();
      setTimeout(function(){
        contact.fetch({
          success: function(data){
            defer.resolve(data);
          },
          error: function(data){
            defer.resolve(undefined);
          }
        });
      }, 2000);
      return defer.promise();
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities();
  });

  ContactManager.reqres.setHandler("contact:entity", function(id){
    return API.getContactEntity(id);
  });
});
*/