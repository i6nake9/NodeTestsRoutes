const fs = require('fs');
const dotenv = require('dotenv');
const http = require('http');
dotenv.config();

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200);
		res.setHeader('Content-Type', 'text/html');
		return res.end(() => {
			'<h1>Test</h1>';
		});
	}

	if (req.url === '/users') {
	}
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
