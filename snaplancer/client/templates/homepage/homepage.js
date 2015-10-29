Template.homepage.helpers({

});

Template.homepage.events({
  'click a.link-hire': function(e) {
    e.preventDefault();

    if (Meteor.isCordova) {
      // Open camera to take 13 seconds video
      navigator.device.capture.captureVideo(captureSuccess, captureError, {
        limit: 1, duration: 13
      });
    } else {
      console.log('Not on mobile, no camera');
      //TODO: Remove this asfter testing
    }
  },
});

function captureSuccess(mediaFiles) {
  var path = '';
  for (let i = 0; i < mediaFiles.length; i++) {
    path = mediaFiles[i].fullPath;
    console.log(path);
  }
  Router.go('submitProject');
}

function captureError(error) {
  console.log('Error capturing media!!!');
  console.log(error);
}

function onSuccessFileUpload(email, fileUrl) {
  // Slingshot successfully uploaded the file to S3
  // Save to database
  Projects.insert({email: email, fileUrl: fileUrl});

  // Post project to freelancer
  //Meteor.call('freelancer/createProject',
}
