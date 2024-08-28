'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('delivery_routes', [
      {
        fkOrderId: 1, // Ensure this matches an ID from the `orders` table
        Timestamp: new Date(),
        Latitude: 40.7128,
        Longitude: -74.006,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('delivery_routes', null, {});
  },
};
