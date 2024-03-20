'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      OrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FkRiderId: {
        type: Sequelize.INTEGER,
      },
      OrderTotal: {
        type: Sequelize.INTEGER,
      },
      DeliveryStatus: {
        type: Sequelize.STRING,
      },
      FkCustomerId: {
        type: Sequelize.INTEGER,
      },
      FkStoreId: {
        type: Sequelize.INTEGER,
      },
      FkProductId: {
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
    await queryInterface.dropTable('Orders');
  },
};
