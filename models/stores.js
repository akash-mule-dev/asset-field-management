'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
    static associate(models) {
      this.belongsTo(models.Managers, {
        foreignKey: 'fkManagerId',
        as: 'manager',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      this.hasMany(models.Products, {
        foreignKey: 'fkStoreId',
        as: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.hasOne(models.Addresses, {
        foreignKey: 'fkStoreId',
        as: 'address',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Stores.init(
    {
      StoreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      StoreName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ContactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fkManagerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'managers', // Table name
          key: 'ManagerId',
        },
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Stores',
      tableName: 'stores',
    },
  );

  return Stores;
};
