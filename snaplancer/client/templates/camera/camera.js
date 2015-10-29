Template.camera.events({

  'click .camera-upload': function(e){
    e.preventDefault();
    var test = document.getElementById('imagename').files[0];

    console.log(test);

    var uploader = new Slingshot.Upload("myFileUploads");

    uploader.send(test, function (error, downloadUrl) {
      console.log('hello error' + error);
      console.log('hello downlaod url' + downloadUrl);

      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
      }
      else {
        Router.go('submitProject');
      }
    });
  }
});
