'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Addresses, {
        foreignKey: 'fkCustomerId',
        as: 'customerAddress',
      });
    }
  }
  Stores.init(
    {
      StoreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      StoreName: DataTypes.STRING,
      StorePhoneNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stores',
    },
  );
  return Stores;
};
