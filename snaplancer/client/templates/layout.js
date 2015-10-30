Template.layout.rendered = function () {
  IonSideMenu.snapper.settings({disable: 'right'});
};

Template.layout.events({
  'click .home': function() {
    Router.go("/");
  },
  'click .messenger': function() {
    Router.go("/messages");
  }
});
