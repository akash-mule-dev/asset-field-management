'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('addresses', [
      {
        fkCustomerId: 1, // Ensure this matches an ID from the `customers` table
        fkRiderId: null,
        fkStoreId: null,
        AddressLine1: '123 Main St',
        AddressLine2: 'Apt 4B',
        City: 'Cityville',
        PostalCode: '12345',
        Latitude: 40.7128,
        Longitude: -74.006,
        isPrimary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses', null, {});
  },
};
