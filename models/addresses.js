'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Addresses.init(
    {
      AddressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      FkCustomerId: DataTypes.INTEGER,
      FkRiderId: DataTypes.INTEGER,
      FkStoreId: DataTypes.STRING,
      State: DataTypes.STRING,
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      Pincode: DataTypes.INTEGER,
      Latitude: DataTypes.INTEGER,
      Longitude: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Addresses',
    },
  );
  return Addresses;
};
