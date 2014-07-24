var fs = require('fs'),
	async = require('async'),
	request = require('request'),
	csv = require('csv-parser'),
	fileUrl = 'http://forever.codeforamerica.org/fellowship-2015-tech-interview/Violations-2012.csv'

var parseCsv = function(cb){
	var violations = [];
	request.get(fileUrl)
		.pipe(csv())
		.on('data', function(violation){
			violations.push(violation)
		})
		.on('end', function(){
			cb(null, violations)
		})
}

// run the functions
async.waterfall([
	parseCsv
], function(err, results){
	if (err) return err;

	console.log(results)
})