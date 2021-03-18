import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  level: 'info',
  transports: [
    new transports.Console(),
    new (transports.File)({
      filename: 'logs.log',
      options: {
        flags: 'w', // Clear the log file on first run
        highWaterMark: 24 // This slows down the Memory Leak!          
      }
    })
  ]
});

