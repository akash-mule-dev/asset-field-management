const { Managers, Addresses } = require('../models');

class ManagerService {
  // Create a new manager
  static async createManager(data) {
    const { ManagerName, ManagerEmail, ManagerPhoneNumber, Password, address } = data;

    try {
      // Create the manager
      const manager = await Managers.create({
        ManagerName,
        ManagerEmail,
        ManagerPhoneNumber,
        Password,
      });

      // Save the manager's address
      if (address) {
        const { AddressLine1, AddressLine2, City, PostalCode, Latitude, Longitude, isPrimary } = address;
        let addedAddress = await Addresses.create({
          AddressLine1,
          AddressLine2,
          City,
          PostalCode,
          Latitude,
          Longitude,
          isPrimary,
          fkManagerId: manager.ManagerId,
        });
        return { manager, address: addedAddress };
      }
    } catch (error) {
      console.error('Error creating manager:', error);
      throw error;
    }
  }

  // Get all managers
  static async getAllManagers() {
    try {
      const managers = await Managers.findAll({
        include: [
          {
            model: Addresses,
            as: 'managerAddress', // Ensure this alias matches the one used in the model association
          },
        ],
      });

      if (!managers) {
        throw new Error('No managers found');
      }

      return managers;
    } catch (error) {
      console.error('Error fetching managers:', error.message);
      throw new Error('Error fetching managers');
    }
  }

  // Get a manager by ID
  static async getManagerById(managerId) {
    try {
      return await Managers.findByPk(managerId, {
        include: [
          {
            model: Addresses,
            as: 'managerAddress',
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching manager by ID:', error);
      throw error;
    }
  }

  // Update a manager
  static async updateManager(managerId, data) {
    const { ManagerName, ManagerEmail, ManagerPhoneNumber, Password, address } = data;

    try {
      // Update the manager
      const [updated] = await Managers.update(
        {
          ManagerName,
          ManagerEmail,
          ManagerPhoneNumber,
          Password,
        },
        {
          where: { ManagerId: managerId },
        },
      );

      if (updated) {
        // Update or create address
        if (address) {
          const { AddressLine1, AddressLine2, City, PostalCode, Latitude, Longitude, isPrimary } = address;
          await Addresses.upsert({
            AddressLine1,
            AddressLine2,
            City,
            PostalCode,
            Latitude,
            Longitude,
            isPrimary,
            fkManagerId: managerId,
          });
        }
        return this.getManagerById(managerId);
      }

      throw new Error('Manager not found');
    } catch (error) {
      console.error('Error updating manager:', error);
      throw error;
    }
  }

  // Delete a manager
  static async deleteManager(managerId) {
    try {
      // Delete the manager
      const deleted = await Managers.destroy({
        where: { ManagerId: managerId },
      });

      if (deleted) {
        // Delete associated address
        await Addresses.destroy({
          where: { fkManagerId: managerId },
        });
      }

      return deleted;
    } catch (error) {
      console.error('Error deleting manager:', error);
      throw error;
    }
  }
}

module.exports = ManagerService;
