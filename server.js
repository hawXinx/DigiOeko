const http = require('http');
const express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
const port = 8080

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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

app.get('/payment', function(req, res){
	/*fs.readFile( "bankingWidget.html", 'utf8', function (err, data) {
		
	});*/
	fs.readFile( "bankingExample1.json", 'utf8', function (err, data) {
		res.end(data);
	});
})

app.post('/payment', function(req, res){
	//var bankname = req.body.bankname;
	/*console.log("Bankname: " + bankname);
	fs.readFile( "bankingThanks.html", 'utf8', function (err, data) {
		var data2 = data.replace("BLANK", bankname);
		res.end(data2);
	});*/
	fs.readFile("bankingExample1.json", 'utf8', function (err, data) {
		var obj = JSON.parse(data);
		obj.paymentMethod="CreditCard";
		obj.paymentStatus="Done";
		res.end(JSON.stringify(obj));
	});

})

var server = app.listen(port, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Listening at http://%s:%s", host, port)
})
