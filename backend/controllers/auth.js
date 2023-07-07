const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
};