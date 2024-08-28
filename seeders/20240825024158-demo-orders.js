'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        OrderDate: new Date(),
        Status: 'Pending',
        fkCustomerId: 1, // Ensure this matches an ID from the `customers` table
        fkRiderId: 1, // Ensure this matches an ID from the `riders` table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
