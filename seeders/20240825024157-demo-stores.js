'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stores', [
      {
        StoreName: 'Store A',
        ContactNumber: '1231231234',
        fkManagerId: 1, // Ensure this matches an ID from the `managers` table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        StoreName: 'Store B',
        ContactNumber: '4321432145',
        fkManagerId: 2, // Ensure this matches an ID from the `managers` table
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stores', null, {});
  },
};
