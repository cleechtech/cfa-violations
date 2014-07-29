var fs = require('fs'),
	q = require('q'),
	path = require('path'),
	csv = require('csv-parser'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('../config/env')[env];

// read from file sitting on our server
var violations = [],
	dfd = q.defer();

fs.createReadStream(path.join(envConfig.rootPath, '/server/Violations-2012.csv'))
	.pipe(csv())
	.on('data', function(violation){
		violations.push(violation)
	})
	.on('error', function(err){
		dfd.reject(err)
	})
	.on('end', function(){
		dfd.resolve(violations)
	})

module.exports = dfd.promise;



// get data directly from code for america (in case we wanted to)
// ===========================================================
// config/routes.js: app.get('/api/violations', violations.readFromSource)

// var async = require('async'),
// 	request = require('request'),
// 	fileUrl = 'http://forever.codeforamerica.org/fellowship-2015-tech-interview/Violations-2012.csv';

// readFromSource: function(req, res){
// 	var parseCsv = function(cb){
// 		var violations = [];
// 		request.get(fileUrl)
// 			.pipe(csv())
// 			.on('data', function(violation){
// 				violations.push(violation)
// 			})
// 			.on('end', function(){
// 				cb(null, violations)
// 			})
// 	}

// 	// run run run
// 	async.waterfall([
// 		parseCsv
// 	], function(err, results){
// 		if (err) return err;

// 		res.jsonp(results)	// each csv line as array of js objects
// 	})
// }