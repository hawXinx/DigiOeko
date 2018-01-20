const http = require('http')
const express = require('express')
const port = 8080

var app = express();

app.post('/register', function(req, res) {
	res.end('Hello World');
	
})

app.get('/product', function(req, res) {
	res.end('Hello World');
	
})

app.get('/product/:id', function(req, res) {
	res.end('Hello World');
	
})

app.post('/orders', function(req, res) {
	res.end('Hello World');
	
})

app.get('/orders', function(req, res) {
	res.end('Hello World');
	
})

app.get('/orders/:id', function(req, res) {
	res.end('Hello World');
	
})

app.put('/orders/:id', function(req, res) {
	res.end('Hello World');
	
})

app.delete('/orders/:id', function(req, res) {
	res.end('Hello World');
	
})

app.get('/user', function(req, res) {
	res.end('Hello World');
	
})

app.put('/user', function(req, res) {
	res.end('Hello World');
	
})

app.delete('/user', function(req, res) {
	res.end('Hello World');
	
})

var server = app.listen(port, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Listening at http://%s:%s", host, port)
})
