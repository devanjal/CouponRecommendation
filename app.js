
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, http = require('http')
, session = require('express-session')
, path = require('path');

var expressSession = require("express-session");
var recom=require('./routes/recom');

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(expressSession({
	secret: 'cmpe239_teststring',
	resave: false,  //don't save session if unmodified
	saveUninitialized: false,	// don't create session until something stored
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/show',routes.show);
app.get('/graphs', routes.graphs);
app.get('/get', recom.getData);
app.post('/data', recom.checkLogin);


	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});
//});
