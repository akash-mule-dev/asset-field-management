'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      AddressId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fkCustomerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers', // Table name
          key: 'CustomerId',
        },
        allowNull: true, // Allow null if not always associated with a customer
      },
      fkRiderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'riders',
          key: 'RiderId',
        },
        allowNull: true,
      },
      fkStoreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stores',
          key: 'StoreId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: true,
      },
      fkManagerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'managers',
          key: 'ManagerId',
        },
        allowNull: true,
      },

      AddressLine1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      AddressLine2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      City: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PostalCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      Longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      isPrimary: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  },
};
