'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      CustomerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CustomerName: {
        type: Sequelize.STRING,
        allowNull: true, // Allow null if not all customers have a name
      },
      CustomerEmail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      CustomerPassword: {
        type: Sequelize.STRING,
        allowNull: true, // Allow null if not always required
      },
      CustomerPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: true, // Allow null if not always provided
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
    await queryInterface.dropTable('customers');
  },
};
