'use strict';
const users = require('./variables/users');

const table = 'users';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = Date.now();
    return queryInterface.bulkInsert(table, [
      users.aaron,
      users.tanner,
      users.isaiah,
      users.jonathan,
      users.luke,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(table, null, {});
  }
};
