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
        userType: 'studentOtherSchool',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Trịnh Hoàng Quân',
        mssv: '20204850',
        phoneNumber: '0325314123',
        email: "quanbk@gmail.com",
        password: 'abcd1234',
        userType: 'studentOtherSchool',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Trần Thanh Quang',
        mssv: '20204856',
        phoneNumber: '0325314134',
        email: "quangbk@gmail.com",
        password: 'abcd1234',
        userType: 'studentOtherSchool',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Nguyễn Bá Tư',
        mssv: '20004325',
        phoneNumber: '0325332544',
        email: "tubk@gmail.com",
        password: 'abcd1234',
        userType: 'admin',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Nguyễn Hải long',
        mssv: "20183244",
        phoneNumber: '0432765324',
        email: "longbk@gmail.com",
        password: 'abcd1234',
        userType: 'user',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Nguyễn Văn Hải',
        mssv: "20195634",
        phoneNumber: '0432742374',
        email: "haibk@gmail.com",
        password: 'abcd1234',
        userType: 'user',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
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
