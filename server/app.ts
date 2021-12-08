import cors from 'cors';
import express, { Application } from 'express';
//import mongoose from 'mongoose';

/* Utils */
//import Config from './utils/config';
//import logger from './utils/logger';

const app: Application = express();

app.use(express.static('../client/build'));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

/* API endpoints */

export default app;
