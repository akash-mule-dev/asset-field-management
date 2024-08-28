'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    static associate(models) {
      this.hasMany(models.Addresses, {
        foreignKey: 'fkCustomerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'customerAddresses',
        sourceKey: 'CustomerId',
      });
      this.hasMany(models.Orders, {
        foreignKey: 'fkCustomerId',
        as: 'customerOrders',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        sourceKey: 'CustomerId',
      });
    }
  }

  Customers.init(
    {
      CustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CustomerName: DataTypes.STRING,
      CustomerEmail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      CustomerPassword: DataTypes.STRING,
      CustomerPhoneNumber: DataTypes.STRING, // Changed to STRING for phone numbers
    },
    {
      sequelize,
      modelName: 'Customers',
    },
  );

  return Customers;
};
