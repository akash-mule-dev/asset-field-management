'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
      StoreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      StoreName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ContactNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fkManagerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'managers', // Table name
          key: 'ManagerId',
        },
        allowNull: true, // Allow null if a store can exist without a manager
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
  },
};
