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
          ProductId: 36,
          FkStoreId: 51,
          ProductName: 'Iphone',
          ProductDescription: 'Description19',
          ProductPrice: 201,
        },
        {
          ProductId: 45,
          FkStoreId: 51,
          ProductName: 'Moto',
          ProductDescription: 'Description94',
          ProductPrice: 503,
        },
        {
          ProductId: 47,
          FkStoreId: 51,
          ProductName: 'Iphone',
          ProductDescription: 'Description59',
          ProductPrice: 561,
        },
        {
          ProductId: 61,
          FkStoreId: 51,
          ProductName: 'Samsung',
          ProductDescription: 'Description23',
          ProductPrice: 339,
        },
        {
          ProductId: 79,
          FkStoreId: 51,
          ProductName: 'Pixel',
          ProductDescription: 'Description31',
          ProductPrice: 404,
        },
        {
          ProductId: 51,
          FkStoreId: 51,
          ProductName: 'Samsung',
          ProductDescription: 'Description85',
          ProductPrice: 290,
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
