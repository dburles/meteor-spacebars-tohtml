Package.describe({
  summary: "Easily compile spacebars templates to html",
  version: "1.0.0",
  git: "https://github.com/dburles/meteor-spacebars-tohtml.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['spacebars', 'spacebars-compiler']);
  api.addFiles('spacebars-tohtml.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('spacebars-tohtml');
  api.addFiles('spacebars-tohtml-tests.js');
});
