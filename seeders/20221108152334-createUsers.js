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
        name: "Nguyễn Công Lập",
        mssv: "20202412",
        phoneNumber: "0325847985",
        email: "lapbk@gmail.com",
        password: "$2a$10$Hv0NRxhpIrjtUEkWW0483e9TYsdJSr.t.paM1F9XFOtwdnMPawAhe",
        userType: "userOtherSchool",
        updatedAt: "2022-11-10 17:52:34",
        createdAt: "2022-11-10 17:52:34"
      },
      {
        name: "Trịnh Hoàng Quân",
        mssv: "20204850",
        phoneNumber: "0325314123",
        email: "quanbk@gmail.com",
        password: "$2a$10$dDUVt3GC.S.lXZd7MdbZ/ulVjLdy2rk6Q9aWP.L3wZ8/YecMio/8.",
        userType: "userOtherSchool",
        updatedAt: "2022-11-10 17:52:34",
        createdAt: "2022-11-10 17:52:34"
      },
      {
        name: "Trần Thanh Quang",
        mssv: "20204856",
        phoneNumber: "0325314134",
        email: "quangbk@gmail.com",
        password: "$2a$10$fxyoEBs6UIUgodVve0qoYO3TuSTPLO4pPcwF0dOVZMhuZYwl0k86G",
        userType: "userOtherSchool",
        updatedAt: "2022-11-10 17:52:34",
        createdAt: "2022-11-10 17:52:34"
      },
      {
        name: "Nguyễn Bá Tư",
        mssv: "20004325",
        phoneNumber: "0325332544",
        email: "tubk@gmail.com",
        password: "$2a$10$EpZtNlkaOCMnaivxaYAvYugSm7BwHxDszAyPEONGzdDzb/td.ydBS",
        userType: "admin",
        updatedAt: "2022-11-10 17:52:34",
        createdAt: "2022-11-10 17:52:34"
      },
      {
        name: "Nguyễn Hải long",
        mssv: "20183244",
        phoneNumber: "0432765324",
        email: "longbk@gmail.com",
        password: "$2a$10$ZNUf0GRJFoasb7KAbmyfV..z12ZGiHSJgVQ.SByQwOefGjka6HzNG",
        userType: "user",
        updatedAt: "2022-11-10 17:52:34",
        createdAt: "2022-11-10 17:52:34"
      },
      {
        name: "Nguyễn Văn Hải",
        mssv: "20195634",
        phoneNumber: "0432742374",
        email: "haibk@gmail.com",
        password: "$2a$10$kVpC7YZYKBulNjo6scqgEus5JbQuHLCOcuA6e2H439czq99Gu6OfS",
        userType: "user",
        updatedAt: "2022-11-10 17:52:34",
        createdAt: "2022-11-10 17:52:34"
      },

      //password: abcd1234
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
