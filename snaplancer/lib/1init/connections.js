ServerCore = DDP.connect('http://app.thrivetide.com/');
Companyhub = DDP.connect(Meteor.settings.public.companyhubUrl);

// Make it so that doing Meteor.call means doing Companyhub.call
// (useful for Accounts package)
Meteor.call = function() {
  return Companyhub.call.apply(Companyhub, arguments);
};
