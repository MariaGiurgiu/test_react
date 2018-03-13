// TODO crează o aplicație NodeJS cu Express
let express = require('express');
let fs = require ('fs');
let app = express();
let path = require('path');
let c = require('./MyComponent.js');
let React = require('react');
let ReactDOMServer = require('react-dom/server');



app.set('port', 3000);


app.use('/MyComponent.js', express.static(path.join('MyComponent.js')));

// TODO crează un fișier test.html care să conțină un element DOM cu id-ul "react"

// TODO crează o componentă React care să conțină textul "Hello, World"

// TODO Crează un endpoint care să întoarcă un html care va face, apoi, redner client side a componentei React de mai sus
app.get('/clientsidereact', function (req,res) {
	res.sendFile(__dirname + '/test.html');
});

// TODO Crează un endpoint care să întoarcă un html care să conțină deja o componentă React foarte simplă (aceeași) randată server side
app.get('/serversidereact', function (req,res) {

	let component = React.createElement(c.component, null)

        let html = ReactDOMServer.renderToString(component);

	console.log(html);	

	fs.readFile('./test1.html', 'utf8', function (err, data) {
        	if (err) throw err;

                const document = data.replace(/<div id="react"><\/div>/, `<div id="react">${html}</div>`);

		console.log(document);	
                res.send(document)
            });


});

app.listen(3000);

console.log("Running at Port 3000");	
