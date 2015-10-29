Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["image/avi", "image/mov", "image/mp4", "image/png", "video/mov", "video/mp4" ],
  maxSize: null//
});

Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  bucket: "snaplancer-media",
  acl: "public-read",
  region: "ap-southeast-2",

  authorize: function () {

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    return 'pitch-videos/' + file.name;
  }
});
