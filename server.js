var http = require('http');
var reload = require('reload');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	// res.send('hi');
	res.sendFile(path.join(__dirname+'/index.html'));
	// res.sendFile(path.join(__dirname+'/index.html'));
});	

var server = http.createServer(app);

reload(server, app, 450);

server.listen(3000, function() {
	console.log('Listening on port 3000');
});