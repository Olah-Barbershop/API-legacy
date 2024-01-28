const ContactInfo = require('../models/contactinfo.model');
const createError = require('http-errors');

const getContactInfo = async (req, res, next) => {
    try {
        const results = await ContactInfo.find({}, {_id: 0, "left._id": 0, "right._id": 0}, {sort: {_id: 1}});
        if (!results) throw createError(404, 'No available contact method.');
        res.status(200).send(results);
    } catch (err) {
        console.log(err.message);
        res.status(404);
        next(err);
    };
}

module.exports = getContactInfo;
