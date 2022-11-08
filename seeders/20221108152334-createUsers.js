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
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Nguyễn Công Lập',
        mssv: '20202412',
        phoneNumber: '0325847985',
        email: "lapbk@gmail.com",
        password: 'abcd1234',
        userType: 'admin',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Trịnh Hoàng Quân',
        mssv: '2020',
        phoneNumber: '0325314123',
        email: "quanbk@gmail.com",
        password: 'abcd1234',
        userType: 'admin',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
