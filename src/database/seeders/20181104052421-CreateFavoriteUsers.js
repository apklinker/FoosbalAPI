'use strict';
const favoriteUsers = require('./variables/favorite-users');

const table = 'favorite_users';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = Date.now();
    return queryInterface.bulkInsert(table, [
      favoriteUsers.aaronTanner,
      favoriteUsers.aaronLuke,
      favoriteUsers.aaronIsaiaah,
      favoriteUsers.tannerAaron,
      favoriteUsers.tannerLuke,
      favoriteUsers.tannerIsaiah,
      favoriteUsers.isaiahTanner,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(table, null, {});
  }
};
