Meteor.methods({
  'freelancer/createProject': function(data) {
    Freelancer.Projects.create(data, Meteor.bindEnvironment( (err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(res);
    }));
  },
});
