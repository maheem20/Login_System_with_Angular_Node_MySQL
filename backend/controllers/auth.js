const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
};