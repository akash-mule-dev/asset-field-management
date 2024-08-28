'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Managers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations if any
      // For example, if managers have many stores:
      this.hasMany(models.Stores, {
        foreignKey: 'fkManagerId',
        as: 'managedStores',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });

      this.hasOne(models.Addresses, {
        foreignKey: 'fkManagerId',
        as: 'managerAddress',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
    }
  }

  Managers.init(
    {
      ManagerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ManagerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ManagerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      ManagerPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Managers',
      tableName: 'managers',
    },
  );

  return Managers;
};
