var violations = require('../controllers/violations');

module.exports = function(app, envConfig){

	app.get('/api/violations', violations.all(envConfig.rootPath))

	// everything else goes to index.html
	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
}