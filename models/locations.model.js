const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
    address: String,
    phone: String,
    email: String,
    mondayToThursday: String,
    friday: String,
    saturdayToSunday: String
});

const Locations = mongoose.model('locations', LocationsSchema);
module.exports = Locations;
