'use strict';
const {
  Model
} = require('sequelize');
const books = require('./books');
const cardstudent = require('./cardstudent');
const place = require('./place');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(cardstudent, {foreignKey: 'userId', as: 'userIdCard'});
      this.belongsTo(place, {foreignKey: 'userId', as: 'userIdPlace'});
      this.hasMany(books, {foreignKey:"userId", as:"userIdBook"});
    }
  }
  Users.init({
    name: DataTypes.STRING,
    mssv: {
      type: DataTypes.STRING,
      allowNull: false,           //đánh dấu mssv không được rỗng
      unique: true,               //mssv là duy nhất
      validate: {
        len: [8,8],               //chiều dài là 8->8 ký tự
        isNumeric: true,          //thuộc tính phải là dạng số
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        len: [10,11],
        isNumeric: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6,12],
      }
    },
    userType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};