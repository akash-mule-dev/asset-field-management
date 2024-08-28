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
      // Define association here
      this.belongsTo(models.Customers, {
        foreignKey: 'fkCustomerId',
        as: 'customer',
      });
      this.belongsTo(models.Riders, {
        foreignKey: 'fkRiderId',
        as: 'rider',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.Stores, {
        foreignKey: 'fkStoreId',
        as: 'store',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsTo(models.Managers, {
        foreignKey: 'fkManagerId',
        as: 'managerAddress',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
    }
  }

  Addresses.init(
    {
      AddressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fkCustomerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'customers', // Table name
          key: 'CustomerId',
        },
        allowNull: true,
      },
      fkRiderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'riders',
          key: 'RiderId',
        },
        allowNull: true,
      },
      fkStoreId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'stores',
          key: 'StoreId',
        },
        allowNull: true,
      },
      fkManagerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'managers',
          key: 'ManagerId',
        },
        allowNull: true,
      },
      AddressLine1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AddressLine2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PostalCode: {
        type: DataTypes.STRING,
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
      isPrimary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Addresses',
      tableName: 'addresses',
    },
  );

  return Addresses;
};
