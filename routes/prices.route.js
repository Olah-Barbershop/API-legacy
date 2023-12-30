const express = require('express');
const Prices = require('../models/prices.model');
const router = express.Router();
const createError = require('http-errors');
const headers = require('./headers')

router.get('/', async (req, res, next) => {
    try {
        const results = await Prices.find({}, {_id: 0});
        if (results == "") throw createError(404, 'Az árak nem elérhetőek.');
        res.set(headers);
        res.send(results);
    } catch (error) {
        console.log(error.message);
        next(error);  
    }
});

module.exports = router;
