var fs = require('fs');
var path = require('path');

module.exports = function(directory, fileExt, callback){
	fs.readdir(directory, function(err, data) {
		if (err)
			return callback(err);
		var result= [];
		data.forEach(function(file) {
			if (path.extname(file) === '.'+fileExt) {
				result.push(file);
			}	
		});
		return callback(null, result);
	});
}

