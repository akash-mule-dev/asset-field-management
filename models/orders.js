'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // Define associations
      this.belongsTo(models.Customers, {
        foreignKey: 'fkCustomerId',
        as: 'customer',
      });
      this.belongsTo(models.Riders, {
        foreignKey: 'fkRiderId',
        as: 'rider',
      });
      this.hasMany(models.OrderItems, {
        foreignKey: 'fkOrderId',
        as: 'orderItems',
      });
      // this.hasMany(models.DeliveryData, {
      //   foreignKey: 'fkOrderId',
      //   as: 'deliveryData',
      // });
    }
  }

  Orders.init(
    {
      OrderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      OrderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fkCustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fkRiderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Orders',
      tableName: 'orders',
    },
  );

  return Orders;
};
