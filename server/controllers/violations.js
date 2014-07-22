var fs = require('fs'),
	csvParser = require('csv-parser');

module.exports = {
	all: function(rootPath){
		var violations = [];
		fs.createReadStream(rootPath + '/server/Violations-2012.csv')
			.pipe(csvParser())
			.on('data', function(violation){
				violations.push(violation)
			})
			.on('end', function(){
				
			})
		// probably should: 
		// wait to see that violations is populated,
		// check for errors
		return function(req, res){
			res.jsonp(violations)
		}
	}
};