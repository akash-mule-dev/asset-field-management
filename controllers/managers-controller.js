const ManagerService = require('../services/managers-service');

class ManagerController {
  // Create a new manager
  static async createManager(req, res) {
    try {
      const manager = await ManagerService.createManager(req.body);
      res.status(201).json(manager);
    } catch (error) {
      res.status(500).json({ error: 'Error creating manager' });
    }
  }

  // Get all managers
  static async getAllManagers(req, res) {
    try {
      const managers = await ManagerService.getAllManagers();
      res.status(200).json(managers);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching managers' });
    }
  }

  // Get a manager by ID
  static async getManagerById(req, res) {
    try {
      const manager = await ManagerService.getManagerById(req.params.id);
      if (manager) {
        res.status(200).json(manager);
      } else {
        res.status(404).json({ error: 'Manager not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching manager by ID' });
    }
  }

  // Update a manager
  static async updateManager(req, res) {
    try {
      const manager = await ManagerService.updateManager(req.params.id, req.body);
      if (manager) {
        res.status(200).json(manager);
      } else {
        res.status(404).json({ error: 'Manager not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating manager' });
    }
  }

  // Delete a manager
  static async deleteManager(req, res) {
    try {
      const deleted = await ManagerService.deleteManager(req.params.id);
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Manager not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting manager' });
    }
  }
}

module.exports = ManagerController;
