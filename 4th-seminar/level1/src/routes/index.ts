import express, { Router } from 'express';
import UserRouter from '../routes/UserRouter';
import ReviewRouter from '../routes/ReviewRouter';

const router: Router = express.Router();

router.use('/user', UserRouter);
router.use('/review', ReviewRouter);

export default router;
