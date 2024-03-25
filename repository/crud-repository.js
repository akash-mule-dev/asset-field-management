const status = require('http-status');

const AppError = require('../utils/errors/app-error');

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (!response) {
      throw new AppError('Not able to find the resource', status.NOT_FOUND);
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new AppError('Not able to find the resource', status.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    if (!response) {
      console.log('response ::', response);
      throw new AppError('Not able to find the resource', status.NOT_FOUND);
    }
    return response;
  }

  async update(id, data) {
    // data -> {col: value, ....}
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;
