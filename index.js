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
		return res.end();
	}

	if (req.url === '/users') {
	}
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
