'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('managers', [
      {
        ManagerName: 'Alice Johnson',
        ManagerEmail: 'alice.johnson@example.com',
        ManagerPhoneNumber: '1234567890',
        Password: 'hashed_password_here',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ManagerName: 'Bob Brown',
        ManagerEmail: 'bob.brown@example.com',
        ManagerPhoneNumber: '0987654321',
        Password: 'hashed_password_here',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('managers', null, {});
  },
};
