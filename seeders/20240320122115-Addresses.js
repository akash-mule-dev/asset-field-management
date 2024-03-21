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
      'Addresses',
      [
        {
          AddressId: 13,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'California',
          city: 'San Diego',
          street: '613 Park Ave',
          Pincode: 39666,
          Latitude: -30.255946,
          Longitude: -25.118892,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 40,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'Georgia',
          city: 'San Diego',
          street: '254 Broadway',
          Pincode: 19820,
          Latitude: 51.564986,
          Longitude: 43.517927,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 5,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'Illinois',
          city: 'San Antonio',
          street: '673 Maple Ave',
          Pincode: 26419,
          Latitude: 83.06657,
          Longitude: -82.819043,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 92,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'Georgia',
          city: 'Houston',
          street: '553 Washington St',
          Pincode: 35503,
          Latitude: 12.599858,
          Longitude: 73.960604,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 75,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'California',
          city: 'Chicago',
          street: '303 Market St',
          Pincode: 10731,
          Latitude: 8.412222,
          Longitude: 47.948709,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 69,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'California',
          city: 'New York City',
          street: '689 Washington St',
          Pincode: 14194,
          Latitude: 71.83524,
          Longitude: 25.874433,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 24,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'Georgia',
          city: 'San Antonio',
          street: '394 Washington St',
          Pincode: 98730,
          Latitude: -47.652813,
          Longitude: -59.820569,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 42,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'California',
          city: 'New York City',
          street: '974 Madison Ave',
          Pincode: 89253,
          Latitude: -83.808281,
          Longitude: 17.456714,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 57,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'California',
          city: 'San Diego',
          street: '387 Maple Ave',
          Pincode: 77858,
          Latitude: -24.930657,
          Longitude: 61.986165,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          AddressId: 4,
          FkCustomerId: null,
          FkRiderId: 63,
          FkStoreId: 88,
          State: 'Ohio',
          city: 'Philadelphia',
          street: '913 Maple Ave',
          Pincode: 76013,
          Latitude: -30.052099,
          Longitude: 27.772219,
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
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
