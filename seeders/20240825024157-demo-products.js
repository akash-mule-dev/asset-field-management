'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        ProductName: 'Product 1',
        Description: 'Description for Product 1',
        Price: 10.0,
        StockQuantity: 100,
        fkStoreId: 1, // Ensure this matches an ID from the `stores` table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductName: 'Product 2',
        Description: 'Description for Product 2',
        Price: 20.0,
        StockQuantity: 50,
        fkStoreId: 2, // Ensure this matches an ID from the `stores` table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
