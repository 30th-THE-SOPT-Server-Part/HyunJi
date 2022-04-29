import express, { Router } from 'express';
import UserRouter from '../routes/UserRouter';

const router: Router = express.Router();

router.use('/user', UserRouter);

export default router;
