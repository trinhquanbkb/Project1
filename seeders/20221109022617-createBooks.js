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
        dayBorrow: null,
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
        dayBorrow: null,
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
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Sherlock holmes',
        author: 'Conan Doyle',
        title: 'Trinh thám',
        countPage: 2300,
        year: 1876,
        positionBook: '3T',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Dragonball tập 1',
        author: 'Toriyama Akira',
        title: 'võ thuật',
        countPage: 167,
        year: 1923,
        positionBook: '4T',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Dragonball tập 2',
        author: 'Toriyama Akira',
        title: 'võ thuật',
        countPage: 159,
        year: 1923,
        positionBook: '5T',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Dragonball tập 3',
        author: 'Toriyama Akira',
        title: 'võ thuật',
        countPage: 163,
        year: 1923,
        positionBook: '6T',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Conan tập 1',
        author: 'Aoyama Gōshō',
        title: 'trinh thám',
        countPage: 213,
        year: 1994,
        positionBook: '2G',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Conan tập 2',
        author: 'Aoyama Gōshō',
        title: 'trinh thám',
        countPage: 210,
        year: 1994,
        positionBook: '5G',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Conan tập 12',
        author: 'Aoyama Gōshō',
        title: 'trinh thám',
        countPage: 200,
        year: 1994,
        positionBook: '12F',
        userId: null,
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12'
      },
      {
        name: 'Những kẻ khốn khổ',
        author: 'Victor Hugo',
        title: 'tiểu thuyết',
        countPage: 5243,
        year: 1862,
        positionBook: '1B',
        userId: null,
        dayBorrow: null,
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
     await queryInterface.bulkDelete('Books', null, {});
  }
};
