// Products, Categories, and Orders from ServerCore
Products = new Meteor.Collection('products', {
  connection: ServerCore,
  transform: function(doc) {
    return new Product(doc);
  }
});
Categories = new Meteor.Collection('categories', {
  connection: ServerCore,
});
Orders = new Mongo.Collection('orders', {
  connection: ServerCore,
});

// Deliverers from Companyhub
Deliverers = new Mongo.Collection('deliverers', {
  connection: Companyhub
});

// Accounts from Companyhub
Meteor.users = new Mongo.Collection('users', {
  connection: Companyhub
});
Meteor.users._transform = function(doc) {
  return new User(doc);
};
Accounts.connection = Companyhub;
// onLogin hook to store loginToken, might have to be moved to somewhere else
// The core of persistent login functionality
OfflineStore = new Ground.Collection(new Mongo.Collection(null), 'account');
Accounts.onLogin(function() {
  // Store login data to localStorage as soon as login happens
  OfflineStore.update(Meteor.userId(), {
    $set: {
      profile: Meteor.user().profile,
      emails: Meteor.user().emails,
      _loginToken: Accounts._storedLoginToken()
    }
  }, {
    upsert: true
  });
});
