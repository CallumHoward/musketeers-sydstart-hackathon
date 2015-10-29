Helpers = {};

Helpers.postProjectToFreelancer = function(email, fileUrl) {
  Projects.insert({email: email, fileUrl: fileUrl, status: 0}, function(err, projectId) {
    // Post project to freelancer
    var projectData = {
      title: 'Snaplancer: Decode this video and turn this into a project ',
      description: 'Hi we are snaplancer and we need you help to first, ' + 
        'decode the video and then carry through with the project. Here is ' + 
        'the video explaining the project: ' + fileUrl,
      currencty: {id: 3},
      budget: {minimum: 100},
      jobs: [{id: 37}] // Project Management
    };

    Meteor.call('freelancer/createProject', projectId, projectData, function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  });
}
