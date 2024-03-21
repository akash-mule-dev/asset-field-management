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
      // define association here
    }
  }
  Products.init(
    {
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      FkStoreId: DataTypes.INTEGER,
      ProductName: DataTypes.STRING,
      ProductDescription: DataTypes.STRING,
      ProductPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Products',
    },
  );
  return Products;
};
