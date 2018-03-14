let express = require('express');
let fs = require ('fs');
let path = require('path');
let app = express();

let React = require('react');
let ReactDOMServer = require('react-dom/server');

let c = require('./ServerComponent.js');

app.set('port', 3000);

app.use('/ClientComponent.js', express.static(path.join('ClientComponent.js')));

app.get('/clientsidereact', function (req,res) {
	res.sendFile(__dirname + '/client_test.html');
});

app.get('/serversidereact', function (req,res) {
	let component = React.createElement(c.component, null)
	let html = ReactDOMServer.renderToString(component);

	fs.readFile('./server_test.html', 'utf8', function (err, data) {
       		if (err) throw err;

        	const document = data.replace(/<div id="react"><\/div>/, `<div id="react">${html}</div>`);

		console.log(document);	
		return res.send(document)
	});
});

app.listen(3000);

console.log("Running at Port 3000");	
