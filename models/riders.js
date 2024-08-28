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
      // Define associations
      this.hasMany(models.Orders, {
        foreignKey: 'fkRiderId',
        as: 'riderOrders',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      this.hasOne(models.Addresses, {
        foreignKey: 'fkRiderId',
        as: 'homeAddress',
      });
    }
  }

  Riders.init(
    {
      RiderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      RiderName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      RiderEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      RiderPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Riders',
      tableName: 'riders',
    },
  );

  return Riders;
};
