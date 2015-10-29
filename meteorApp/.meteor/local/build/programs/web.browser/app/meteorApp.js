(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// meteorApp.js                                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
  // counter starts at 0                                               //
  Session.setDefault('counter', 0);                                    // 3
                                                                       //
  Template.hello.helpers({                                             // 5
    counter: function () {                                             // 6
      return Session.get('counter');                                   // 7
    }                                                                  //
  });                                                                  //
                                                                       //
  Template.hello.events({                                              // 11
    'click button': function () {                                      // 12
      // increment the counter when button is clicked                  //
      Session.set('counter', Session.get('counter') + 1);              // 14
    }                                                                  //
  });                                                                  //
}                                                                      //
                                                                       //
if (Meteor.isServer) {                                                 // 19
  Meteor.startup(function () {                                         // 20
    var data = {                                                       // 21
      title: 'Please build me a MEAN Stack app',                       // 22
      description: 'I want a facebook app made with the MEAN Stack, which is Mongo, Ember, Angular, and NoSQL',
      currency: {                                                      // 24
        id: 1                                                          // 25
      },                                                               //
      budget: {                                                        // 27
        minimum: 1200                                                  // 28
      },                                                               //
      jobs: [{                                                         // 30
        id: 7                                                          // 31
      }]                                                               //
    };                                                                 //
                                                                       //
    //Freelancer.Projects.create(data, Meteor.bindEnvironment(function(error, result) {
    //  if (error) console.log(error);                                 //
    //  console.log(result);                                           //
    //}));                                                             //
    data = {};                                                         // 39
    data['projects'] = [3412];                                         // 40
                                                                       //
    Freelancer.Projects.get(data, Meteor.bindEnvironment(function (error, result) {
      if (error) console.log(error);                                   // 43
      console.log(result);                                             // 44
    }));                                                               //
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
