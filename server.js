/** @format */

const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');

dotenv.config();

const server = Hapi.server({
  port: process.env.SERVER_PORT,
  host: process.env.SERVER_HOST,
});

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello World',
});

const init = async () => {
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
