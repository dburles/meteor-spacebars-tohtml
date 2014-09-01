Spacebars.toHTML = function(data, template) {
  var compiled = SpacebarsCompiler.compile(template, { isBody: true });
  var fn = eval(compiled);
  return Blaze.toHTML(Blaze.With(data, fn));
};