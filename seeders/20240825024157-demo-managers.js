'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('managers', [
      {
        ManagerName: 'John Doe',
        ManagerEmail: 'john.doe@example.com',
        ManagerPhoneNumber: '1234567890',
        Password: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ManagerName: 'Jane Smith',
        ManagerEmail: 'jane.smith@example.com',
        ManagerPhoneNumber: '0987654321',
        Password: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('managers', null, {});
  },
};
