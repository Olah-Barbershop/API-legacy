const express = require('express');
const Services = require('../models/services.model');
const router = express.Router();
const createError = require('http-errors');
const headers = require('./headers')

router.get('/', async (req, res, next) => {
    try {
        const results = await Services.find({}, {_id: 0});
        if (results == "") throw createError(404, 'No available services.');
        res.send(results);
    } catch (error) {
        console.log(error.message);
        next(error);  
    }
});

module.exports = router;
