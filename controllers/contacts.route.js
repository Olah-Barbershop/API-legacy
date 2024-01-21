const Contacts = require('../models/contacts.model')
const createError = require('http-errors');

const getContacts = async (req, res, next) => {
    try {
        const results = await Contacts.find({}, {_id: 0, "left._id": 0, "right._id": 0}).sort({_id: 1});
        if (!results) throw createError(404, 'No available contact.');
        res.send(results)
    } catch (err) {
        console.log(err.message);
    };
}

module.exports = getContacts;
