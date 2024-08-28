'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'order_items',
      [
        {
          fkOrderId: 1, // Ensure these IDs exist in the orders table
          fkProductId: 1, // Ensure these IDs exist in the products table
          Quantity: 2,
          Price: 19.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fkOrderId: 1,
          fkProductId: 2, // Ensure these IDs exist in the products table
          Quantity: 1,
          Price: 29.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fkOrderId: 2,
          fkProductId: 3, // Ensure these IDs exist in the products table
          Quantity: 3,
          Price: 15.49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more records as needed
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('order_items', null, {});
  },
};
