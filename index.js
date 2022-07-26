const fs = require('fs');
const dotenv = require('dotenv');
const http = require('http');
dotenv.config();

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			'<html> <head>Server Response</head><body><h1>Hello!</h1></body></html>'
		);
		res.write(
			'<form action="/create-user" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form>'
		);
		return res.end();
	}

	if (req.url === '/users') {
		res.write(
			'<html> <head>Server Response</head><body><ul><li>Users 1</li><li>Users 2</li><li>Users 3</li></ul></body></html>'
		);
		return res.end();
	}
	if (req.url === '/create-user' && req.method === 'POST') {
		const bodyChunk = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			bodyChunk.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(bodyChunk).toString();
			const message = parsedBody.split('=')[1];
			res.write(`<h1>${message}</h1>`);
			console.log(message);
		});
	}
	if (req.url === '/create-user' && req.method === 'GET') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			'<form action="/" method="POST"><button type="submit">Redirect</button></form>'
		);
		return res.end();
	}
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
