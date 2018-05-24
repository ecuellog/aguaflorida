const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

var transporter = nodemailer.createTransport('SMTP',{
	service: 'Gmail',
	auth: {
		user: 'noreply.aguaflorida@gmail.com',
		pass: 'aguaflorida'
	}
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, '/dist/assets/images/favicon.ico')));

app.use(function(req, res, next){
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
  next();
});

app.post('/contact', function(req, res){
	console.log('sending email...');
	console.log(req.body);
	transporter.sendMail({
		from: 'noreply.aguaflorida@gmail.com',
		to: 'aguafloridainfo@gmail.com',
		subject: "Aguaflorida Contact Form",
		text: "Mensaje de " + req.body.name + 
			"\nEmail: " + req.body.email +
			"\nMensaje:\n\n" + req.body.message
	}, function(err, info){
		if(err){
			return console.log(err);
			res.status(500).json({
				error: "Ha habido un error al enviar tu mensaje."
			});
		}
		console.log('Message sent\n');
		res.status(201).json({
			message: "Tu mensaje ha sido enviado!"
		});
	});
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8080, () => console.log('listening on port 8080'));