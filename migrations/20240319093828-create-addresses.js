'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      AddressId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FkCustomerId: {
        type: Sequelize.INTEGER,
      },
      FkRiderId: {
        type: Sequelize.INTEGER,
      },
      FkStoreId: {
        type: Sequelize.STRING,
      },
      State: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      Pincode: {
        type: Sequelize.INTEGER,
      },
      Latitude: {
        type: Sequelize.INTEGER,
      },
      Longitude: {
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
    await queryInterface.dropTable('Addresses');
  },
};
