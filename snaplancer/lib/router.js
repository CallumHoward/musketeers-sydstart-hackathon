// Main configuration for all routes
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

Router.route('/messages', {
  name: 'messages',
});
