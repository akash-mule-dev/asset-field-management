const { Riders } = require('../models');
const CrudRepository = require('./crud-repository');

class RidersRepository extends CrudRepository {
  constructor() {
    super(Riders);
    this.Riders = Riders;
  }

  getAllRiders() {
    return this.getAll();
  }
}

module.exports = RidersRepository;
