'use strict';

const table = 'buildings';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = Date.now();
    return queryInterface.bulkInsert(table, [
      {
        id: 0,
        createdAt: date,
        updatedAt: date,
        deletedAt: null,
        name: "The Bank",
        address: "4501 NW Urbandale Dr, Urbandale, IA 50322",
      },
      {
        id: 1,
        createdAt: date,
        updatedAt: date,
        deletedAt: date,
        name: "Random",
        address: "=-=-=-=-=",
      },
      {
        id: 2,
        createdAt: date,
        updatedAt: date,
        deletedAt: null,
        name: "Hy-Vee",
        address: "3801 S James St, Grimes, IA 50111",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(table, null, {});
  }
};
