Template.messages.events({
  'click #message-submit': function(e) {
    e.preventDefault();

    var message = $("#message-input").val();
    $("#message-input").val('');
    Messages.insert({
      type: 'text',
      from: 'user',
      timestamp: '123',
      content: message
    });
  },

});

Template.messages.helpers({
  isUser: function () {
    return this.from === 'user';
  },
  getMessages: function () {
    return Messages.find().fetch();
  }
});
