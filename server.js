var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

// EXPRESS CONFIG
app.use(bodyParser())
app.use(express.static(__dirname + '/public'));

// ENVIRONMENT CONFIG
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./server/config/env')[env];

// ROUTES
require('./server/config/routes')(app)

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});