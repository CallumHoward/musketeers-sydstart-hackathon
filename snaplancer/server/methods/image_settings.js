Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["image/avi", "image/mov", "image/mp4"],
  maxSize: null//
});

Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  bucket: "snaplancer-media",
  acl: "public-read",

  authorize: function () {


  },

  key: function (file) {
    //Store file into a directory by the user's username.
    return file.name;
  }
});
