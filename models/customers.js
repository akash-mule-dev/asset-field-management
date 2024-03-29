'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Addresses, {
        foreignKey: 'fkCustomerId',
        as: 'customerAddresses',
      });
      this.hasMany(models.Orders, {
        foreignKey: 'fkCustomerId',
        as: 'customerOrders',
      });
    }
  }
  Customers.init(
    {
      CustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      CustomerName: DataTypes.STRING,
      CustomerEmail: DataTypes.STRING,
      CustomerPassword: DataTypes.STRING,
      CustomerPhoneNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Customers',
    },
  );
  return Customers;
};
