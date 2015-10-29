// Data subscription & everything basically depends on companyId
var COMPANYID;
if (Meteor.settings &&
    Meteor.settings.public &&
    Meteor.settings.public.companyId) {
  COMPANYID = Meteor.settings.public.companyId;
}

// Main configuration for all routes
// Subscribe everything and load Google Maps
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  progressSpinner : false,
});

// Prevent IronRouter to convert route names containing '/' or '.'
Router.setTemplateNameConverter(function (str) { return str; });

//The first page the user sees
Router.route('/', {
  name: 'homepage',
});

Router.route('/camera', {
  name: 'camera'
});

Router.route('/submitProject', {
  name: 'submitProject',
});
