
var _ = require('lodash');
var violations;

// promise I'll get the data
require('./getData').then(function(data){
	violations = data
}, function(err){
	violations = err
	console.error('aww snap we could not read the data..')
})

module.exports = {
		
	all: function(req, res){
		res.jsonp(violations)
	},
	getCategory: function(req, res){
		var category = req.params.category;

		var results = _.where(violations, { "violation_category" : category })
		res.jsonp(results)
	},
	categories: function(req, res){
		// { category_name: [ { violation }, { violation } ] }
		var grouped = _.groupBy(violations, function(v){
			return v.violation_category
		})
		
		var categories = _.map(grouped, function(arr, name){
			return {
				violation_category: name,
				number_violations: arr.length
			}
		})

		res.jsonp(categories)
	}
}