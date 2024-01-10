const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  link: String
});

const ContactsSchema = new Schema({
  left: ContactSchema,
  right: ContactSchema
});

const Contacts = mongoose.model('contacts', ContactsSchema);
module.exports = Contacts;
