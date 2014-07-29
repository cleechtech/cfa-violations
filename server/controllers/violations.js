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
		// get categories
		var categories = _.map(violations, function(v){
			return v.violation_category
		})
		// remove duplicates
		categories = _.uniq(categories)
		res.jsonp(categories)
	}
	
};

// _.groupBy