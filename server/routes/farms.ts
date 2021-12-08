import { Router, Request, Response } from 'express';
import logger from '../utils/logger';

import FarmService from '../services/farms';

const router: Router = Router();

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    res.json(await FarmService.getAll());
  } catch (error: any) {
    res.status(400).send({ error: 'Unable to fetch farms' });
    logger.error(error.message);
  }
});

export default router;
