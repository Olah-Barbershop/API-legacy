const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  name: String,
  description: String,
  amount: Number
});

const Services = mongoose.model('services', ServicesSchema);
module.exports = Services;
