const express = require('express');
const router = express.Router();
const Locations = require('../models/locations.model')
const createError = require('http-errors');
const headers = require('./headers')

router.get('/', async (req, res, next) => {
    try {
        const results = await Locations.find({}, {_id: 0});
        if (results == "") throw createError(404, 'No available locations.');
        res.send(results)
    } catch (err) {
        console.log(err.message);
    };
});

module.exports = router;
