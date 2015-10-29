Template.RouteNavigator.onRendered(function() {
  function onBackButtonDown(event) {
    event.preventDefault();
    event.stopPropagation();
    // Go to prev route when back-button is pressed
    Router.go(routeNameNS + '.prev');
  }

  function onDeviceReady() {
    document.addEventListener("backbutton", onBackButtonDown, false);
  }

  // Do all that if we are in cordova
  if (Meteor.isCordova) {
    document.addEventListener("deviceready", onDeviceReady, false);
  }
});
