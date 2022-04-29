import express, { Router } from 'express';

const router: Router = express.Router();

// routing mapping
router.use('/user', require('./user'));

module.exports = router; // 모듈로 반환
