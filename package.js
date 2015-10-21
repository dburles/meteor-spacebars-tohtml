Package.describe({
  name: 'dburles:spacebars-tohtml',
  summary: "Easily compile spacebars templates to html",
  version: "1.0.1",
  git: "https://github.com/dburles/meteor-spacebars-tohtml.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['spacebars@1.0.0', 'spacebars-compiler@1.0.1', 'blaze@2.1.3']);
  api.addFiles('spacebars-tohtml.js');
});
