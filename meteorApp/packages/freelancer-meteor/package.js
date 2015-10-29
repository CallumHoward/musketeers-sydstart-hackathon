Package.describe({
  name: 'tendo:freelancer-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('freelancer-meteor.js', 'server');
  api.export('Freelancer', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tendo:freelancer-meteor');
  api.addFiles('freelancer-meteor-tests.js');
});

Npm.depends({
  "freelancer-node": "https://musketeersdummy:giveusmonies8@github.com/kAlbert19/freelancer-node/archive/6bcc588807934a9bd06bbafd8dcfac66a4657e7b.tar.gz"
});
