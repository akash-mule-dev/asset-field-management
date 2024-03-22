// const status = require('http-status');
const { successResponse, errorResponse } = require('../statuses');
const logger = require('../../logging');

exports.updateSuccessObject = (response, data) => {
  logger.info(JSON.stringify(data));
  const successResponseObject = successResponse(data);
  response.status(successResponseObject.statusCode).json(successResponseObject);
  return response;
};

exports.updateErrorObject = (response, error) => {
  logger.error(JSON.stringify(error));
  const errorResponseObject = errorResponse(error);
  response.status(errorResponseObject.statusCode).json(errorResponseObject);
  return response;
};
