const RidersRepository = require('../repository/riders-repository');
const { commonUtil } = require('../utils');
const { RidersService } = require('../services');

const ridersService = new RidersService(new RidersRepository());
async function getAllRiders(req, res) {
  try {
    const ridersCollection = await ridersService.getAllRiders();
    return commonUtil.updateSuccessObject(res, ridersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

function getAllAvailableRiders(req, res) {
  try {
    const ridersCollection = ridersService.getAllRiders();
    return commonUtil.updateSuccessObject(res, ridersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}
module.exports = {
  getAllRiders,
  getAllAvailableRiders,
};
