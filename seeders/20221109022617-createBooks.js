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
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Dế mèn phiêu lưu ký',
        author: 'Tô Hoài',
        title: 'Phiêu lưu',
        countPage: 195,
        year: 1941,
        positionBook: '32D',
        userId: null,
        dayBorrow: '2022-01-17 04:33:12',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Vợ nhặt',
        author: 'Kim Lân',
        title: 'Truyện ngắn',
        countPage: 75,
        year: 1962,
        positionBook: '2C',
        userId: null,
        dayBorrow: '2022-01-17 04:33:12',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Đắc nhân tâm',
        author: 'Dale Carnegie',
        title: 'Tự giúp bản thân',
        countPage: 291,
        year: 1936,
        positionBook: '15G',
        userId: null,
        dayBorrow: '2022-01-17 04:33:12',
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
     await queryInterface.bulkDelete('Books', null, {});
  }
};
