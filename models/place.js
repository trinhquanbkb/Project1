'use strict';
const {
  Model
} = require('sequelize');
const cardstudent = require('./cardstudent');
module.exports = (sequelize, DataTypes) => {
  class Places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      this.hasOne(Users, {foreignKey: 'userId', as: 'userIdPlace'});
    }
  }
  Places.init({
    positionPlace: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      validate: {
        max: 1,
        min: 0
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Places',
  });
  return Places;
};