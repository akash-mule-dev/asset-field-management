'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Customers',
      [
        {
          CustomerName: 'Name13',
          CustomerEmail: 'email18@example.com',
          CustomerPassword: '37136225',
          CustomerPhoneNumber: 643511,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerName: 'Name74',
          CustomerEmail: 'email19@example.com',
          CustomerPassword: '93683682',
          CustomerPhoneNumber: 338024,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerName: 'Name53',
          CustomerEmail: 'email37@example.com',
          CustomerPassword: '43318455',
          CustomerPhoneNumber: 3478324,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerName: 'Name98',
          CustomerEmail: 'email22@example.com',
          CustomerPassword: '64991430',
          CustomerPhoneNumber: 714080,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerName: 'Name23',
          CustomerEmail: 'email39@example.com',
          CustomerPassword: '15678345',
          CustomerPhoneNumber: 22096,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerName: 'Name81',
          CustomerEmail: 'email17@example.com',
          CustomerPassword: '32829737',
          CustomerPhoneNumber: 490515,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerName: 'Name67',
          CustomerEmail: 'email75@example.com',
          CustomerPassword: '76616249',
          CustomerPhoneNumber: 2660,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
