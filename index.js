const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
// Test GET from insomnia
app.get('/', (req, res) => {
	res.send('Hello world from Node.Js ');
});

app.listen(PORT, () => {
	console.log(`Server started on https://localhost:${PORT}`);
});
