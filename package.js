Package.describe({
  summary: "Easily compile spacebars templates to html",
  version: "1.0.0",
  git: "https://github.com/dburles/meteor-spacebars-tohtml.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['spacebars@1.0.0', 'spacebars-compiler@1.0.1']);
  api.addFiles('spacebars-tohtml.js');
});
