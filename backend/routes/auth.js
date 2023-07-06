const express = require('express');
const { body } = require('express-validator/check');
const router = express.Router();
const User = require('../models/user');