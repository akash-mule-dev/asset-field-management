'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Stores, {
        foreignKey: 'fkStoreId',
        as: 'store',
      });
    }
  }

  Products.init(
    {
      ProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      StockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // Optionally add a foreign key if products are linked to stores
      fkStoreId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Products',
      tableName: 'products',
    },
  );

  return Products;
};
