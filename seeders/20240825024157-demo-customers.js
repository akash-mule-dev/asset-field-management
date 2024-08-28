'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customers', [
      {
        CustomerName: 'Alice Brown',
        CustomerEmail: 'alice.brown@example.com',
        CustomerPassword: 'hashedpassword',
        CustomerPhoneNumber: '1122334455',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerName: 'Bob Johnson',
        CustomerEmail: 'bob.johnson@example.com',
        CustomerPassword: 'hashedpassword',
        CustomerPhoneNumber: '5566778899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
  },
};
