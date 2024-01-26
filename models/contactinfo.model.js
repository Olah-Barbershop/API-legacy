const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  link: String
});

const ContactInfoSchema = new Schema({
  left: ContactSchema,
  right: ContactSchema
});

const ContactInfo = mongoose.model('contactinfo', ContactInfoSchema, 'contactinfo');
module.exports = ContactInfo;
