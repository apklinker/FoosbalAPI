'use strict';

const table = 'users';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = Date.now();
    return queryInterface.bulkInsert(table, [
      {
        id: 0,
        createdAt: date,
        updatedAt: date,
        deletedAt: null,
        firstName: "Aaron",
        lastName: "Klinker",
        buildingId: 0,
      },
      {
        id: 1,
        createdAt: date,
        updatedAt: date,
        deletedAt: date,
        firstName: "Tanner",
        lastName: "England",
        buildingId: 0,
      },
      {
        id: 2,
        createdAt: date,
        updatedAt: date,
        deletedAt: null,
        firstName: "Isaiah",
        lastName: "Walker",
        buildingId: 1,
      },
      {
        id: 3,
        createdAt: date,
        updatedAt: date,
        deletedAt: null,
        firstName: "Jonathan",
        lastName: "Stoner",
        buildingId: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(table, null, {});
  }
};
