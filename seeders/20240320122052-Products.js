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
      'Products',
      [
        {
          ProductId: 36,
          FkStoreId: 51,
          ProductName: 'Iphone',
          ProductDescription: 'Description19',
          ProductPrice: 201,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          ProductId: 45,
          FkStoreId: 51,
          ProductName: 'Moto',
          ProductDescription: 'Description94',
          ProductPrice: 503,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          ProductId: 47,
          FkStoreId: 51,
          ProductName: 'Iphone',
          ProductDescription: 'Description59',
          ProductPrice: 561,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          ProductId: 61,
          FkStoreId: 51,
          ProductName: 'Samsung',
          ProductDescription: 'Description23',
          ProductPrice: 339,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          ProductId: 79,
          FkStoreId: 51,
          ProductName: 'Pixel',
          ProductDescription: 'Description31',
          ProductPrice: 404,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          ProductId: 51,
          FkStoreId: 51,
          ProductName: 'Samsung',
          ProductDescription: 'Description85',
          ProductPrice: 290,
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
    await queryInterface.bulkDelete('Products', null, {});
  },
};
