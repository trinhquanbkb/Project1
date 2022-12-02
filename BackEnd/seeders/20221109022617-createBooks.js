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
        dayBorrow: '2022-01-17 04:33:12',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: '2022-03-17 04:33:12',
        userId: 1
      },
      {
        name: 'Vợ nhặt',
        author: 'Kim Lân',
        title: 'Truyện ngắn',
        countPage: 75,
        year: 1962,
        positionBook: '2C',
        dayBorrow: '2022-01-17 04:33:12',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: '2022-01-17 04:33:12',
        userId: 1
      },
      {
        name: 'Đắc nhân tâm',
        author: 'Dale Carnegie',
        title: 'Tự giúp bản thân',
        countPage: 291,
        year: 1936,
        positionBook: '15G',
        dayBorrow: '2022-01-17 04:33:12',
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'1',
        endDate: '2022-03-17 04:33:12',
        userId: 2
      },
      {
        name: 'Sherlock holmes',
        author: 'Conan Doyle',
        title: 'Trinh thám',
        countPage: 2300,
        year: 1876,
        positionBook: '3T',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: '2022-03-17 04:33:12',
      },
      {
        name: 'Dragonball tập 1',
        author: 'Toriyama Akira',
        title: 'võ thuật',
        countPage: 167,
        year: 1923,
        positionBook: '4T',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
      },
      {
        name: 'Dragonball tập 2',
        author: 'Toriyama Akira',
        title: 'võ thuật',
        countPage: 159,
        year: 1923,
        positionBook: '5T',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
      },
      {
        name: 'Dragonball tập 3',
        author: 'Toriyama Akira',
        title: 'võ thuật',
        countPage: 163,
        year: 1923,
        positionBook: '6T',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
      },
      {
        name: 'Conan tập 1',
        author: 'Aoyama Gōshō',
        title: 'trinh thám',
        countPage: 213,
        year: 1994,
        positionBook: '2G',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
      },
      {
        name: 'Conan tập 2',
        author: 'Aoyama Gōshō',
        title: 'trinh thám',
        countPage: 210,
        year: 1994,
        positionBook: '5G',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
      },
      {
        name: 'Conan tập 12',
        author: 'Aoyama Gōshō',
        title: 'trinh thám',
        countPage: 200,
        year: 1994,
        positionBook: '12F',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
      },
      {
        name: 'Những kẻ khốn khổ',
        author: 'Victor Hugo',
        title: 'tiểu thuyết',
        countPage: 5243,
        year: 1862,
        positionBook: '1B',
        dayBorrow: null,
        createdAt: '2022-01-17 04:33:12',
        updatedAt: '2022-01-17 04:33:12',
        status:'0',
        endDate: null,
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
