Meteor.methods({
  'freelancer/createProject': function(projectId, data) {
    Freelancer.Projects.create(data, Meteor.bindEnvironment( (err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      var result = JSON.parse(res);
      Projects.update(projectId, {$set: {
        'freelancer.projectId': res.result.id,
        status: 1,
      }});
    }));
  },
});
