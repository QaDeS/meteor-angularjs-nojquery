var fs = Npm.require('fs');
var path = Npm.require('path');

var replacementJQuery = '(function(){ var replacement = window.jQuery || (window.angular ? angular.element : {});	window.$ = window.$ || replacement; window.jQuery = window.jQuery || replacement;	Package.jquery = {"$": window.$, "jQuery": window.jQuery}; })()'

fs.writeFile(path.resolve("../client/packages/jquery.js"), replacementJQuery, function(err) {
	if(err) {
		console.log(err)
	}
});
