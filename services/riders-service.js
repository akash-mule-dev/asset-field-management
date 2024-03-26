const { Addresses } = require('../models');
class RidersService {
  constructor(ridersRepository) {
    this.ridersRepository = ridersRepository;
  }

  getAllRiders() {
    return this.ridersRepository.getAll({
      include: { model: Addresses, as: 'riderAddress' },
    });
  }
}

module.exports = RidersService;
