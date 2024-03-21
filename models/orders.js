'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      FkRiderId: DataTypes.INTEGER,
      OrderTotal: DataTypes.INTEGER,
      DeliveryStatus: DataTypes.STRING,
      FkCustomerId: DataTypes.INTEGER,
      FkStoreId: DataTypes.INTEGER,
      FkProductId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Orders',
    },
  );
  return Orders;
};
