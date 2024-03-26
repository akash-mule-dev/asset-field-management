class RidersService {
  constructor(ridersRepository) {
    this.ridersRepository = ridersRepository;
  }

  getAllRiders() {
    return this.ridersRepository.getAll();
  }
}

module.exports = RidersService;
