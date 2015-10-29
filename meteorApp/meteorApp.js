if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    var data = {};
    data.projects = 3142;

    Freelancer.Projects.get(data, Meteor.bindEnvironment(function(error, result) {
      if (error) console.log(error);
      console.log(result);
    }));
  });
}
