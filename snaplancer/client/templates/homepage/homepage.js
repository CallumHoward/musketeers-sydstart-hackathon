Template.homepage.events({
  'click .link': function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (Meteor.isCordova) {
      // Open camera to take 13 seconds video
      navigator.device.capture.captureVideo(captureSuccess, captureError, {
        limit: 1, duration: 180
      });

    } else {
      console.log('Not on mobile, no camera');
    }
  },


  'click .snaplancer, click .expandables': function(e) {
    e.preventDefault();
    var dataId = $(e.target).data('id');

    // Hide previous
    $('.expandables.'+Session.get('currentlyExpanded')).slideUp('fast');

    // Dont expand anything if user clicks on already expanded field
    if (Session.get('currentlyExpanded') === dataId) {
      delete Session.keys.currentlyExpanded;
      return;
    }

    // Expand new one
    $('.expandables.'+dataId).slideDown('fast');
    Session.set('currentlyExpanded', dataId);
  }
});

function captureSuccess(mediaFiles) {
  mediaFile = mediaFiles[0];
  // Set MediaFile to Session and go to next screen
  Session.set('mediaFile', mediaFile);
  Router.go('submitProject');
}

function captureError(error) {
  console.log('Error capturing media!!!');
  console.log(error);
}

Template.homepage.onRendered( () => {
  $('.snaplancer.general').click();
});
