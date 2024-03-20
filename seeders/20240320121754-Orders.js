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
          OrderId: 1,
          FkRiderId: 11,
          OrderTotal: 455,
          DeliveryStatus: 'Waiting',
          FkCustomerId: 51,
          FkStoreId: 82,
          FkProductId: 1,
        },
        {
          OrderId: 2,
          FkRiderId: 11,
          OrderTotal: 421,
          DeliveryStatus: 'InProgress',
          FkCustomerId: 51,
          FkStoreId: 82,
          FkProductId: 2,
        },
        {
          OrderId: 3,
          FkRiderId: 11,
          OrderTotal: 534,
          DeliveryStatus: 'InProgress',
          FkCustomerId: 51,
          FkStoreId: 82,
          FkProductId: 3,
        },
        {
          OrderId: 4,
          FkRiderId: 11,
          OrderTotal: 54,
          DeliveryStatus: 'Completed',
          FkCustomerId: 51,
          FkStoreId: 82,
          FkProductId: 4,
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
