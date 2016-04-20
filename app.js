'use strict';

var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	response.render('index');
});

app.get('/tocus', function (request, response) {
	response.render('tocus');
});

app.listen(3000, '127.0.1.4');