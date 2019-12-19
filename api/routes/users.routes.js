/** @format */

const usersController = require('../controllers/users');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: usersController.getOne,
  },
];
