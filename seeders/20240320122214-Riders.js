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
      'Riders',
      [
        {
          RiderId: 1,
          RiderName: 'Name35',
          RiderEmail: 'email11@example.com',
          RiderPassword: '58228296',
          RiderPhoneNumber: 634726,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          RiderId: 2,
          RiderName: 'Name100',
          RiderEmail: 'email69@example.com',
          RiderPassword: '21567176',
          RiderPhoneNumber: 520714,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          RiderId: 3,
          RiderName: 'Name23',
          RiderEmail: 'email45@example.com',
          RiderPassword: '4675392',
          RiderPhoneNumber: 7771139,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          RiderId: 4,
          RiderName: 'Name14',
          RiderEmail: 'email59@example.com',
          RiderPassword: '9992837',
          RiderPhoneNumber: 768256,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          RiderId: 5,
          RiderName: 'Name59',
          RiderEmail: 'email7@example.com',
          RiderPassword: '36783780',
          RiderPhoneNumber: 6659904,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          RiderId: 6,
          RiderName: 'Name80',
          RiderEmail: 'email1@example.com',
          RiderPassword: '16122128',
          RiderPhoneNumber: 37619,
          createdAt: '9999-12-31 23:59:59',
          updatedAt: '9999-12-31 23:59:59',
        },
        {
          RiderId: 7,
          RiderName: 'Name7',
          RiderEmail: 'email48@example.com',
          RiderPassword: '2836131',
          RiderPhoneNumber: 38549,
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
    await queryInterface.bulkDelete('Riders', null, {});
  },
};
