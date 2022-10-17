const http = require('http');
const app = require('./app');
const { mongoConnect } = require('../services/mongodb-setup')

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  mongoConnect();

  server.listen(PORT, () => {
		console.log(`server is running on port ${PORT}`);
	});
}

startServer();