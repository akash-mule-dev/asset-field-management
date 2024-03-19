'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Riders', {
      RiderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RiderName: {
        type: Sequelize.STRING,
      },
      RiderEmail: {
        type: Sequelize.STRING,
      },
      RiderPassword: {
        type: Sequelize.STRING,
      },
      RiderPhoneNumber: {
        type: Sequelize.INTEGER,
      },
      RiderAddress: {
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
    await queryInterface.dropTable('Riders');
  },
};
