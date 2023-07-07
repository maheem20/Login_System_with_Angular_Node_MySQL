const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');