const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;

// Logging Levels
// {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${'||'} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  colorize: process.stdout.isTTY,
  format: combine(timestamp({ format: 'HH:mm:ss' }), myFormat),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: './logging/combined.log' }),
    new winston.transports.File({ filename: './logging/error.log', level: 'error' }),
  ],
});

//For Production Usage
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     }),
//   );
// }
logger.add(
  new transports.Console({
    format: format.combine(
      format.colorize({
        all: true,
      }),
    ),
  }),
);

module.exports = logger;
