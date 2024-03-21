'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Riders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Riders.init(
    {
      RiderId: DataTypes.INTEGER,
      RiderName: DataTypes.STRING,
      RiderEmail: DataTypes.STRING,
      RiderPassword: DataTypes.STRING,
      RiderPhoneNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Riders',
    },
  );
  return Riders;
};
