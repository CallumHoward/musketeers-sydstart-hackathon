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
    let data = {
      title: 'Please build me a MEAN Stack app',
      description: 'I want a facebook app made with the MEAN Stack, which is Mongo, Ember, Angular, and NoSQL',
      currency: {
        id: 1
      },
      budget: {
        minimum: 1200
      },
      jobs: [{
        id: 7,
      }],
    };

    //Freelancer.Projects.create(data, Meteor.bindEnvironment(function(error, result) {
    //  if (error) console.log(error);
    //  console.log(result);
    //}));
    var data = {};
    data['projects[]'] = [12312, 41231];

    Freelancer.Projects.get(data, Meteor.bindEnvironemtn(function(error, result) {
      if (error) console.log(error);
      console.log(result);
    }));
  });
}
