'use strict';
const {
  Model
} = require('sequelize');
const cardstudent = require('./cardstudent');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(users, {foreignKey: 'userId', as: 'userIdPlace'});
    }
  }
  Place.init({
    positionPlace: DataTypes.STRING,
    status: {
      type: DataTypes.DataTypes,
      validate: {
        max: 1,
        min: 0
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};