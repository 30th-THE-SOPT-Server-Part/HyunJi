import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/user/:userId', require('./user'));
router.get('/blog/:blogId', require('./blog'));
router.post('/signup', require('./signup'));
router.get('/like/:blogId', require('./like'));

module.exports = router;
