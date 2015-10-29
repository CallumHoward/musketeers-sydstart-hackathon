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

});

Template.recruiter.helpers({
  isUser: function () {
    return this.from === 'user';
  },
  getMessages: function () {
    return Messages.find().fetch();
  }
});
