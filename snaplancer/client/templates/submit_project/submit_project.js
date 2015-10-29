Template.submitProject.events({
  'click .create-project': function(e) {
    e.preventDefault();

    var fileUrl = Session.get('fileUrl') || '';
    var email = $('#email-input').val();
    console.log(email);

    // Post project (this helper invokes the needed backend stuff)
    Helpers.postProjectToFreelancer(email, fileUrl);
  },
});
