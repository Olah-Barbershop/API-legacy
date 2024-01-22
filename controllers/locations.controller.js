const Locations = require('../models/locations.model');
const createError = require('http-errors');

const getLocations = async (req, res, next) => {
    try {
        const results = await Locations.find({}, {_id: 0});
        if (!results) throw createError(404, 'No available locations.');
        res.status(200).send(results);
    } catch (err) {
        console.log(err.message);
        res.status(404);
        next(err);
    };
}

module.exports = getLocations;
