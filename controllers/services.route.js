const Services = require('../models/services.model');
const createError = require('http-errors');

const getServices = async (req, res, next) => {
    try {
        const results = await Services.find({}, {_id: 0});
        if (results == "") throw createError(404, 'No available services.');
        res.send(results);
    } catch (error) {
        console.log(error.message);
        next(error);  
    }
}

module.exports = getServices;
