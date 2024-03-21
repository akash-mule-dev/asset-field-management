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
      'Stores',
      [
        {
          Storeid: 4,
          StoreName: 'Name75',
          StorePhoneNumber: 444711,
          FkAddressId: 1,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          Storeid: 10,
          StoreName: 'Name2',
          StorePhoneNumber: 363449,
          FkAddressId: 2,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          Storeid: 8,
          StoreName: 'Name40',
          StorePhoneNumber: 166538,
          FkAddressId: 3,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          Storeid: 81,
          StoreName: 'Name75',
          StorePhoneNumber: 981197,
          FkAddressId: 4,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          Storeid: 82,
          StoreName: 'Name80',
          StorePhoneNumber: 692111,
          FkAddressId: 5,
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
    await queryInterface.bulkDelete('Stores', null, {});
  },
};
