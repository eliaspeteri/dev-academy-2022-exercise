import { createServer, Server } from 'http';

import Config from './utils/config';
import logger from './utils/logger';
import app from './app';
logger.info(`connecting to ${Config.MONGODB_URI}`);

const server: Server = createServer(app);

try {
  server.listen(Config.PORT, (): void => {
    logger.info(`Connected successfully on port ${Config.PORT}`);
  });
} catch (error: any) {
  logger.error(error.message);
}
