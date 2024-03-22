const status = require('http-status');
const successResponse = (data) => {
  return {
    statusCode: status.OK,
    statusMessage: status[200],
    data: data,
  };
};
module.exports = successResponse;
