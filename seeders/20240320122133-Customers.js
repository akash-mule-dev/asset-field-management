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
      'Orders',
      [
        {
          CustomerId: 72,
          CustomerName: 'Name13',
          CustomerEmail: 'email18@example.com',
          CustomerPassword: '37136225',
          CustomerPhoneNumber: 6435118717,
          FkAddressId: 29,
        },
        {
          CustomerId: 47,
          CustomerName: 'Name74',
          CustomerEmail: 'email19@example.com',
          CustomerPassword: '93683682',
          CustomerPhoneNumber: 3383489024,
          FkAddressId: 29,
        },
        {
          CustomerId: 92,
          CustomerName: 'Name53',
          CustomerEmail: 'email37@example.com',
          CustomerPassword: '43318455',
          CustomerPhoneNumber: 3476478324,
          FkAddressId: 29,
        },
        {
          CustomerId: 86,
          CustomerName: 'Name98',
          CustomerEmail: 'email22@example.com',
          CustomerPassword: '64991430',
          CustomerPhoneNumber: 7140894770,
          FkAddressId: 29,
        },
        {
          CustomerId: 20,
          CustomerName: 'Name23',
          CustomerEmail: 'email39@example.com',
          CustomerPassword: '15678345',
          CustomerPhoneNumber: 2209495496,
          FkAddressId: 29,
        },
        {
          CustomerId: 67,
          CustomerName: 'Name81',
          CustomerEmail: 'email17@example.com',
          CustomerPassword: '32829737',
          CustomerPhoneNumber: 4905102955,
          FkAddressId: 29,
        },
        {
          CustomerId: 49,
          CustomerName: 'Name67',
          CustomerEmail: 'email75@example.com',
          CustomerPassword: '76616249',
          CustomerPhoneNumber: 2276251660,
          FkAddressId: 29,
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
  },
};
