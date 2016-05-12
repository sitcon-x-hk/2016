'use strict';

const express = require('express');
const compression = require('compression');

var app = express();

app.use(compression());
app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/*', function (request, response) {
	response.render('index');
});


app.listen(process.env.PORT || 3000, process.env.ADDRESS || '127.0.1.4');