var violations = require('../controllers/violations');

module.exports = function(app){

	app.get('/api/violations', violations.all)	// [{"violation_id":"204851","inspection_id":"261019","violation_category":"Garbage and Refuse","violation_date":"2012-01-03 00:00:00","violation_date_closed":"2012-02-02 00:00:00","violation_type":"Refuse Accumulation"}
	app.get('/api/violations/categories', violations.categories) // [{"violation_category":"Garbage and Refuse","number_violations":126}, { ... } ]
	
	app.get('/api/violations/byMonth', violations.groupedByMonth)

	// everything else goes to index.html
	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
}