/** @format */

const usersRoutes = require('./users.routes');

module.exports = {
  name: 'ApiRoutes',
  register: server => {
    server.route([...usersRoutes]);
  },
};
