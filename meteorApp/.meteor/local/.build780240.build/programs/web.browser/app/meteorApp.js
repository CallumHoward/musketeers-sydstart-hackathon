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
    var data = {};                                                     // 21
    data.projects = 3142;                                              // 22
                                                                       //
    Freelancer.Projects.get(data, Meteor.bindEnvironment(function (error, result) {
      if (error) console.log(error);                                   // 25
      console.log(result);                                             // 26
    }));                                                               //
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
