/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router, Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import multer, { Multer } from 'multer';
const upload: Multer = multer({ dest: 'uploads/' });

const router: Router = Router();

router.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.post(
  '/',
  upload.single('csv'),
  async (req: Request, res: Response): Promise<void> => {
    logger.info(req.file);

    res.json({ message: 'success' });
  }
);

export default router;
