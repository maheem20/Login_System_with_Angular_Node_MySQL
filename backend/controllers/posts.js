const { validationResult } = require('express-validator');
const Post = require('../models/post');

exports.fetchAll = async (req, res, next) => {
    try {
        const [allPosts] = await Post.fetchAll();
        res.status(200).json(allPosts);
    }
};