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
    }
  },
});

function captureSuccess(mediaFiles) {
  mediaFile = mediaFiles[0];

  Uploader = new Slingshot.Upload("myFileUploads");
  Uploader.send(mediaFile, function (error, downloadUrl) {
    if (error) {
      console.error('Error uploading', uploader.xhr.response);
      alert (error);
      return;
    }

    Session.set('fileUrl', fileUrl);
    Router.go('submitProject');
  });
}

function captureError(error) {
  console.log('Error capturing media!!!');
  console.log(error);
}

