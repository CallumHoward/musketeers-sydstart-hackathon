Template.layout.rendered = function () {
  IonSideMenu.snapper.settings({disable: 'right'});
};

Template.layout.helpers({
  currPage: function() {
    return Meteor.Router.Page();
  },
});
