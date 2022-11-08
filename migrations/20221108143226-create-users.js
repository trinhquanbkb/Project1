'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      mssv: {
        type: Sequelize.STRING,
        allowNull: false,           //đánh dấu mssv không được rỗng
        unique: true,               //mssv là duy nhất
        validate: {
          len: [8, 8],               //chiều dài là 8->8 ký tự
          isNumeric: true,          //thuộc tính phải là dạng số
        }
      },
      phoneNumber: {
        type: Sequelize.STRING,
        validate: {
          len: [10, 11],
          isNumeric: true,
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          len: [6,12],
        }
      },
      userType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};