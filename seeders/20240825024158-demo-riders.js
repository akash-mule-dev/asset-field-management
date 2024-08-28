'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('riders', [
      {
        RiderName: 'Rider 1',
        RiderEmail: 'rider1@example.com',
        RiderPhoneNumber: '1234567890',
        Password: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('riders', null, {});
  },
};
