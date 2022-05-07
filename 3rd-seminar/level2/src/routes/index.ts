import express, { Router } from 'express';
import BlogRouter from '../routes/BlogRouter';

const router: Router = express.Router();

router.use('/blog', BlogRouter);

export default router;
