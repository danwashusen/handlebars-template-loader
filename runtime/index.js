// allow compile calls at runtime
var Handlebars = require('handlebars'); 

// support backbone model property lookups
Handlebars.JavaScriptCompiler.prototype.nameLookup = function(parent, name, type) {
    var result = '(' + parent + ' instanceof Backbone.Model ? ' + parent + '.get(\'' + name + '\') : ' + parent;
        
    if (/^[0-9]+$/.test(name)) {
      return result + '[' + name + '])';
    } else if (Handlebars.JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
      return result + '.' + name + ')';
    } else {
      return result + "['" + name + "'])";
    }
};

module.exports = Handlebars