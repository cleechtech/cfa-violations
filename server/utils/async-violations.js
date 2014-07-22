// Trying to grab file and parse asynch
// only logs out the csv results 
// http://stackoverflow.com/questions/24876575/cannot-run-parse-csv-function-using-async-waterfall

var fs = require('fs'),
	async = require('async'),
	http = require('http'),
	csv = require('csv-parser'),
	fileUrl = 'http://forever.codeforamerica.org/fellowship-2015-tech-interview/Violations-2012.csv'

// get the csv
var getData = function(cb){
	var data = ''
	http.get(fileUrl, function(res){
		res.on('data', function(chunk){
			data += chunk.toString()
		});
		res.on('end', function(){
			cb(null, data)	// pass all the data that's been read to next function (results function)
		})
	}).on('error', function(err){
		// handle errors with the GET request
		cb(err)
	})
};

var parseCsv = function(csvData, cb){
	var violations = [];
	fs.createReadStream(csvData)
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
	getData,
	parseCsv
], function(err, results){
	if (err) return err;

	console.log('typeof(results)')
})