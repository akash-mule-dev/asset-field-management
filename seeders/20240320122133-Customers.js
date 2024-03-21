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
          CustomerId: 72,
          CustomerName: 'Name13',
          CustomerEmail: 'email18@example.com',
          CustomerPassword: '37136225',
          CustomerPhoneNumber: 643511,
          FkAddressId: 29,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerId: 47,
          CustomerName: 'Name74',
          CustomerEmail: 'email19@example.com',
          CustomerPassword: '93683682',
          CustomerPhoneNumber: 338024,
          FkAddressId: 29,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerId: 92,
          CustomerName: 'Name53',
          CustomerEmail: 'email37@example.com',
          CustomerPassword: '43318455',
          CustomerPhoneNumber: 3478324,
          FkAddressId: 29,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerId: 86,
          CustomerName: 'Name98',
          CustomerEmail: 'email22@example.com',
          CustomerPassword: '64991430',
          CustomerPhoneNumber: 714080,
          FkAddressId: 29,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerId: 20,
          CustomerName: 'Name23',
          CustomerEmail: 'email39@example.com',
          CustomerPassword: '15678345',
          CustomerPhoneNumber: 22096,
          FkAddressId: 29,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerId: 67,
          CustomerName: 'Name81',
          CustomerEmail: 'email17@example.com',
          CustomerPassword: '32829737',
          CustomerPhoneNumber: 490515,
          FkAddressId: 29,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          CustomerId: 49,
          CustomerName: 'Name67',
          CustomerEmail: 'email75@example.com',
          CustomerPassword: '76616249',
          CustomerPhoneNumber: 2660,
          FkAddressId: 29,
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
