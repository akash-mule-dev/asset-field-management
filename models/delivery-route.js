'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DeliveryRoute extends Model {
    static associate(models) {
      // Define associations
      this.belongsTo(models.Orders, {
        foreignKey: 'fkOrderId',
        as: 'order',
      });
    }
  }

  DeliveryRoute.init(
    {
      RouteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fkOrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'DeliveryRoute',
      tableName: 'delivery_routes',
    },
  );

  return DeliveryRoute;
};
