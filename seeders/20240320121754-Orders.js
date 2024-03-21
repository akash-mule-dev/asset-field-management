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
          OrderId: 1,
          FkRiderId: 2,
          OrderTotal: 455,
          DeliveryStatus: 'Waiting',
          FkCustomerId: 5,
          FkStoreId: 5,
          FkProductId: 1,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          OrderId: 2,
          FkRiderId: 1,
          OrderTotal: 421,
          DeliveryStatus: 'InProgress',
          FkCustomerId: 2,
          FkStoreId: 2,
          FkProductId: 2,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          OrderId: 3,
          FkRiderId: 6,
          OrderTotal: 534,
          DeliveryStatus: 'InProgress',
          FkCustomerId: 6,
          FkStoreId: 4,
          FkProductId: 3,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          OrderId: 4,
          FkRiderId: 3,
          OrderTotal: 54,
          DeliveryStatus: 'Completed',
          FkCustomerId: 6,
          FkStoreId: 2,
          FkProductId: 4,
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
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
