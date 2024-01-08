const express = require('express');
const router = express.Router();
const Notifications = require('../models/notifications.model')
const createError = require('http-errors');

router.get('/', async (req, res, next) => {
    try {
        const results = await Notifications.find({}, {__v: 0});
        if (results == "") throw createError(404, 'No available notifications.');
        res.send(results)
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
