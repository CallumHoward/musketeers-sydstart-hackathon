// Defaults
var sessionNS = 'RouteNavigator';
var routePath = '/RouteNav';
var routeNameNS = 'RouteNav';
var fallbackRoute = '/';

// var collectionName = 'navigation-director';
// var connectionUrl = null;
// var Server = DDP.connect(connectionUrl);

RouteNavigator = new Mongo.Collection(null);

for (var i = 0; i < Dummy.length; i++) {
  RouteNavigator.insert(Dummy[i]);
}

/* Hooks, the core of this package's functionality */
Router.onStop(function() {
  // onStop hook is executed whenever we LEAVE a route
  var currentRoute = Router.current().route.getName();
  Session.set(sessionNS + '/stopping', currentRoute);
});
Router.onBeforeAction(function() {
  // Will be executed before we run the ACTION of a route, might need to be
  // changed to onRun and onRerun if buggy
  var currentRoute = Router.current().route.getName();
  Session.set(sessionNS + '/starting', currentRoute);
  this.next();
});

/* The logic of 'prev' and 'next' routes that the app can use */
Router.route(routePath + '/prev', {
  name: routeNameNS + '.prev',
  action: function() {
    var currentRoute = Session.get(sessionNS + '/stopping');
    var currentNavigator = RouteNavigator.findOne({_id: currentRoute});

    if (currentNavigator && currentNavigator.prev) {
      this.redirect(currentNavigator.prev);
    } else {
      this.redirect(fallbackRoute);
    }
  }
});

Router.route(routePath + '/next', {
  name: routeNameNS + '.next',
  action: function() {
    var currentRoute = Session.get(sessionNS + '/stopping');
    var currentNavigator = RouteNavigator.findOne({_id: currentRoute});

    if (currentNavigator && currentNavigator.next) {
      this.redirect(currentNavigator.next);
    } else {
      this.redirect(fallbackRoute);
    }
  }
});
