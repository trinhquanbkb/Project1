'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class CardStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(users, {foreignKey: 'userId', as: 'userIdCard'});
    }
  }
  CardStudent.init({
    nameUser: DataTypes.STRING,
    school: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CardStudent',
  });
  return CardStudent;
};