import { createServer, Server } from 'http';

import Config from './utils/config';
import logger from './utils/logger';
import app from './app';

const server: Server = createServer(app);

try {
  server.listen(Config.PORT || 8080, (): void => {
    logger.info(`Connected successfully on port ${Config.PORT}`);
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  logger.error(error.message);
}
