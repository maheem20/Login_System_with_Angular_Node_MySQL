const express = require('express');
const { body } = require('express-validator/check');
const postsController = require('../controllers/posts');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, postsController.fetchAll);

router.post(
    '/post',
    [
        auth,
        body('title').trim().isLength({ min: 5 }).not().isEmpty(),
        body('body').trim().not().isLength({ min: 10 }).isEmpty(),
        body('user').trim().not().isEmpty()
    ], postsController.postPost
);

router.delete('/:id', auth, postsController.deletePost);

module.exports = router;