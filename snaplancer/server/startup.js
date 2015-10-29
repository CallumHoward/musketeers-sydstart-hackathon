Meteor.startup(function() {
  var data = {
    projects: [4132, 1212],
  };
  
  Freelancer.Projects.get(data, Meteor.bindEnvironment( (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(result);
  }));
});
