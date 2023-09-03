const { validationResult } = require('express-validator');
const Post = require('../models/post');

exports.fetchAll = async (req, res, next) => {
    try {
        const [allPosts] = await Post.fetchAll();
        res.status(200).json(allPosts);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postPost = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return

    const title = req.body.title;
    const body = req.body.body;
    const user = req.body.user;
};