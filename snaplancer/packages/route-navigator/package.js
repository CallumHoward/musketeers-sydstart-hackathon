Package.describe({
  name: 'thrivetide:route-navigator',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  // Includes
  api.use([
    'ddp',
    'mongo',
    'iron:router',
  ]);
  api.use('templating', 'client');

  // File exports
  api.addFiles(['dummy.js','route-navigator.js']);
  api.addFiles([
    'client.html',
    'client.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('thrivetide:route-navigator');
  api.addFiles('tests.js');
});
