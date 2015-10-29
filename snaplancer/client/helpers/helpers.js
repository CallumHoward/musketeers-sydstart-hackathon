Helpers = {};

Helpers.postProjectToFreelancer = function(email, fileUrl) {
  console.log('postProjectToFreelancer helper called');
  Meteor.call('postProjectToFreelancer', email, fileUrl, function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

