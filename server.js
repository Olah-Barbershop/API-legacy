const express = require('express');
const cors = require('cors');
const getLocations = require('./controllers/locations.controller');
const getServices = require('./controllers/services.controller');
const getNotifications = require('./controllers/notifications.controller');
const getContactInfo = require('./controllers/contactinfo.controller');
const mongoose = require('mongoose');
const https = require('https');
const createError = require('http-errors');
require('dotenv').config();
const fs = require('fs');

const app = express();

const port = process.env.PORT ? process.env.PORT : 443

const corsOptions = {
  origin: "*",
  methods: 'GET',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use('/locations', cors(corsOptions), express.Router().get('/', getLocations));
app.use('/contactinfo', cors(corsOptions), express.Router().get('/', getContactInfo));
app.use('/notifications', cors(corsOptions), express.Router().get('/', getNotifications));
app.use('/services', cors(corsOptions), express.Router().get('/', getServices));

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
    .listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err.message);
});
