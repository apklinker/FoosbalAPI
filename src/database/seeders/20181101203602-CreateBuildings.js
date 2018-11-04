'use strict';
const buildings = require('./variables/buildings');

const table = 'buildings';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(table, [
      buildings.bank,
      buildings.random,
      buildings.hyvee,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(table, null, {});
  }
};
