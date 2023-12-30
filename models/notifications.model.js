const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
    type: String,
    date: String,
    description: String
});

const Notifications = mongoose.model('notifications', NotificationsSchema);
module.exports = Notifications;