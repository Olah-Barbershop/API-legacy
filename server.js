const express = require('express');
const cors = require('cors');
const locationsRoute = require('./routes/locations.route');
const servicesRoute = require('./routes/services.route');
const notificationsRoute = require('./routes/notifications.route');
const contactsRoute = require('./routes/contacts.route');
const mongoose = require('mongoose');
const https = require('https');
const createError = require('http-errors');
require('dotenv').config();
const fs = require('fs');

const app = express();

const corsOptions = {
  origin: "*",
  methods: 'GET',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use('/locations', cors(corsOptions), locationsRoute);
app.use('/services', cors(corsOptions), servicesRoute);
app.use('/notifications', cors(corsOptions), notificationsRoute);
app.use('/contacts', cors(corsOptions), contactsRoute)

app.use((req, res, next) => {
    next(createError(404, 'Resource not found')); // Create error and forward it to the error handler
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    }); // Send error response
});

// Close connection to database when server is closed
process.on('SIGINT', () => {
    console.log('Closing connection to database');
    mongoose.connection.close();
    process.exit(0);    
});

// Connect to database and start server
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to database');
    https.createServer(
      {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert'),
      },
      app
    )
    .listen(443, () => {
        console.log('Server is running on port 443');
    });
}).catch((err) => {
    console.log(err.message);
});
