const express = require('express');
const { body } = require('express-validator/check');
const postsController = require('../controllers/posts');
const router = express.Router();

router.get('/', postsController.fetchAll);

router.post(
    '/post',
    [
        body('title').trim().isLength({ min: 5 }).not().isEmpty(),
        body('body').trim().not().isLength({ min: 10 }).isEmpty(),
        body('user').trim().not().isEmpty()
    ], postsController.postPost
);