const responses = require('./statuses');
const commonUtil = require('./common-util/common-util');

module.exports = {
  successResponse: responses.successResponse,
  errorResponse: responses.errorResponse,
  commonUtil: commonUtil,
};
