import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true, 
      translateTime: true, 
      ignore: 'pid,hostname' 
    }
  },
  level: 'info',
});

export default logger;
