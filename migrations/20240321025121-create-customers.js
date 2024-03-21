'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      CustomerId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CustomerName: {
        type: Sequelize.STRING,
      },
      CustomerEmail: {
        type: Sequelize.STRING,
      },
      CustomerPassword: {
        type: Sequelize.STRING,
      },
      CustomerPhoneNumber: {
        type: Sequelize.INTEGER,
      },
      FkAddressId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  },
};
