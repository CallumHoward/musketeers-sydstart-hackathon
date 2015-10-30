Template.submitProject.events({
  'click .create-project': function(e) {
    e.preventDefault();

    var mediaFile = Session.get('mediaFile');
    var email = $('#email-input').val();
    Session.set('fileType', mediaFile.type);
    Session.set('fileName', mediaFile.name);
    Session.set('email', email); 

    window.resolveLocalFileSystemURL(
      mediaFile.fullPath, 
      onFileReadSuccess, 
      onFileReadFail
    );
  },
});

function onFileReadSuccess(fileEntry) {
  fileEntry.file(function(file) {
    var reader = new FileReader();

    reader.onloadend = function(e) {
      // Get file Blob for uploading
      var dataView = new DataView(this.result);
      var blob = new Blob([dataView], {type: Session.get('fileType')});
      blob.name = Session.get('fileName');

      // Upload to S3
      IonLoading.show({
        customTemplate: '<h3>Uploading…</h3><p>Please wait while we upload your image.</p>',
        duration: 300000 // 5 mins
      });
      Uploader = new Slingshot.Upload("myFileUploads");
      Uploader.send(blob, function (error, downloadUrl) {
        if (error) {
          console.error('Error uploading', Uploader.xhr.response);
          alert (error);
          return;
        }
        IonLoading.hide();

        var email = Session.get('email');

        // Post project (this helper invokes the needed backend stuff)
        Helpers.postProjectToFreelancer(email, downloadUrl);
        Router.go('homepage');
      });
    }

    reader.readAsArrayBuffer(file);
  });
}

function onFileReadFail(error) {
  console.log(error);
}
