/** @format */

const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');

const routes = require('./api/routes');

dotenv.config();

const server = Hapi.server({
  port: process.env.SERVER_PORT,
  host: process.env.SERVER_HOST,
});

const init = async () => {
  try {
    await server.register(routes);
    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
