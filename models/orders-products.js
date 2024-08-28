'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(models) {
      // Define associations
      this.belongsTo(models.Orders, {
        foreignKey: 'fkOrderId',
        as: 'order',
      });
      this.belongsTo(models.Products, {
        foreignKey: 'fkProductId',
        as: 'product',
      });
    }
  }

  OrderItems.init(
    {
      OrderItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fkOrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fkProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OrderItems',
      tableName: 'order_items',
    },
  );

  return OrderItems;
};
