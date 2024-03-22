const status = require('http-status');
const logger = require('../../logging');
const errorResponse = (error) => {
  logger.error(error);
  return {
    statusCode: status.INTERNAL_SERVER_ERROR,
    statusMessage: status[500],
    errorDescription: error | '',
    data: null,
  };
};
module.exports = errorResponse;
