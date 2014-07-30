
var _ = require('lodash'),
	moment = require('moment'),
	violations;

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
	// array of objects with 'month' and 'total' properties
	groupedByMonth: function(req, res){
		var totalByDate = []
		var months = []

		_.forEach(violations, function(v){
			// get the month and category for every violation
			var month = moment(new Date(v.violation_date)).format('YYYY-MM')
			var category = v.violation_category

			if (_.contains(months, month)){
				var monthToUpdate = _.find(totalByDate, function(m){
					return m.month === month;
				})
				
				// increment total violations for this month
				monthToUpdate.total += 1;
			} else {
				// first violation in given month
				months.push(month)
				totalByDate.push({
					month: month,
					total: 1
				})
			} 
		})

		res.jsonp(totalByDate)
	},

	// array of objects with 'violation_category' 
	// and 'number_violations' properties
	categories: function(req, res){
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
	},
	// getCategory: function(req, res){
	// 	var category = req.params.category;

	// 	// get all violations of a category
	// 	var results = _.where(violations, { "violation_category" : category })

	// 	res.jsonp(results)
	// }
}