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
      this.hasOne(models.Addresses, {
        foreignKey: 'fkRiderId',
        as: 'riderAddress',
      });

      this.hasMany(models.Orders, {
        foreignKey: 'fkRiderId',
        as: 'ordersCollection',
      });
    }
  }
  Riders.init(
    {
      RiderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
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
