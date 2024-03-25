const RidersRepository = require('../repository/riders-repository');
const { commonUtil } = require('../utils');

const ridersRepository = new RidersRepository();
async function getAllRiders(req, res) {
  try {
    const ridersCollection = await ridersRepository.getAllRiders();
    return commonUtil.updateSuccessObject(res, ridersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

function getAllAvailableRiders(req, res) {
  try {
    const ridersCollection = ridersRepository.getAllRiders();
    return commonUtil.updateSuccessObject(res, ridersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}
module.exports = {
  getAllRiders,
  getAllAvailableRiders,
};
