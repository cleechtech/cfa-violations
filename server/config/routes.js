var violations = require('../controllers/violations');

module.exports = function(app, envConfig){

	// app.get('/api/violations', violations.readFromDisc(envConfig.rootPath));

	app.get('/api/violations', violations.readFromSource)

	// everything else goes to index.html
	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
}