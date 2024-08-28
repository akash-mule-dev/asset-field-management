'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order_items', {
      OrderItemId: {
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
      fkProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products', // Name of the table
          key: 'ProductId', // Primary key of the table
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Price: {
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
    await queryInterface.dropTable('order_items');
  },
};
