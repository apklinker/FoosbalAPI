'use strict';

const table = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      deletedAt: {
        type: Sequelize.BIGINT
      },

      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buildingId: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: 'buildings',
          key: 'id'
        },
      },
    });
  },

  down: (queryInterface, _) => {
    return queryInterface.dropTable(table);
  }
};
