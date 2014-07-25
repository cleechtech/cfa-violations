var fs = require('fs'),
	csv = require('csv-parser'),
	async = require('async'),
	request = require('request'),
	fileUrl = 'http://forever.codeforamerica.org/fellowship-2015-tech-interview/Violations-2012.csv'

module.exports = {
	// read from file sitting on our server
	readFromDisc: function(rootPath){
		var violations = [];
		fs.createReadStream(rootPath + '/server/Violations-2012.csv')
			.pipe(csv())
			.on('data', function(violation){
				violations.push(violation)
			})
			.on('end', function(){
				
			})

		return function(req, res){
			res.jsonp(violations)
		}
	},
	// get data directly from code for america
	readFromSource: function(req, res){
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

		// run run run
		async.waterfall([
			parseCsv
		], function(err, results){
			if (err) return err;

			res.jsonp(results)	// each csv line as array of js objects
		})
	}
};