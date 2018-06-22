var Remarkable = require('remarkable');
var loaderUtils = require("loader-utils");
var md = new Remarkable();

module.exports = function (source) {
  if (this.cacheable) this.cacheable();
  var query = loaderUtils.getOptions(this) || {};
  var data = source.split(query.split)
  var config = JSON.parse(data[0])
  config.article = md.render(data[1])
  return `module.exports = ${JSON.stringify(config)}`
}
