var violations = require('../controllers/violations');

module.exports = function(app){

	app.get('/api/violations', violations.all)
	app.get('/api/violations/categories', violations.categories)
	app.get('/api/violations/:category', violations.getCategory)

	// everything else goes to index.html
	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
}