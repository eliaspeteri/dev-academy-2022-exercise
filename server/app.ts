import cors from 'cors';
import express, { Application } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';

/* Controllers */
import farmsRouter from './routes/farms';

/* Utils */
import Config from './utils/config';
import logger from './utils/logger';
import requestLogger from './utils/middleware';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(requestLogger);

/* Endpoints */
app.use('/api/farms', farmsRouter);

mongoose
  .connect(Config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => logger.info('connected to MongoDB'))
  .catch((error) => {
    logger.error(error.message);
  });

export default app;
