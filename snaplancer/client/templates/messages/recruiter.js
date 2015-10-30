Template.recruiter.events({
  'click #message-submit-r': function(e) {
    e.preventDefault();

    var message = $("#message-input-r").val();
    $("#message-input-r").val('');
    Messages.insert({
      type: 'text',
      from: 'recruiter',
      timestamp: '123',
      content: message
    });
  },

  'click #image-submit-r': function(e) {
    e.preventDefault();

    var imgurl = "https://d13yacurqjgara.cloudfront.net/users/643952/screenshots/2322985/logo_dribbble.jpg"

    Messages.insert({
      type: 'image',
      from: 'recruiter',
      timestamp: '123',
      content: imgurl
    });
  },
});

Template.recruiter.helpers({
  isUser: function () {
    return this.from === 'user';
  },
  isImage: function () {
    return this.type === 'image';
  },
  getMessages: function () {
    return Messages.find().fetch();
  }
});
