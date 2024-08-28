'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('delivery_routes', {
      RouteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fkOrderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders', // Name of the table
          key: 'OrderId', // Primary key of the table
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      Timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      Longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    await queryInterface.dropTable('delivery_routes');
  },
};
