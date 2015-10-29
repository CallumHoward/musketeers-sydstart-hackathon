Template.camera.events({

  'click .camera-upload': function(e){
    e.preventDefault();

    var uploader = new Slingshot.Upload("myFileUploads");

    uploader.send('/Users/Pasha/Desktop/quad_logo.png', function (error, downloadUrl) {
      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
      }
      else {

      }
    });


  }

});
