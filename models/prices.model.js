const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PricesSchema = new Schema({
  name: String,
  amount: Number
});

const Prices = mongoose.model('prices', PricesSchema);
module.exports = Prices;
