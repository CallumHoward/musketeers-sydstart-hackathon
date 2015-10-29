User = function(doc) {
  return _.extend(this, doc);
};

_.extend(User.prototype, {
  hasStripeData: function() {
    if (this.stripe) return true;
    return false;
  },
  getStripeCustomerId: function() {
    if (!this.stripe) return null;
    return Meteor.user().stripe.id;
  },
});
