
// Dependencies
const path = require('path');
const express = require('express'); 
const helmet = require('helmet');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// .env Config File - Holds mongodb uri
dotenv.config({ path: './config/config.env'});

// Calls the function to connect the database on start
connectDB();

// Imports api controllers and assigns it to transactions variable 
// Importing the router module and assigning it to variable transactions - called below in app.use
const transactions = require('./routes/transactions');

// initalise express
const app = express();

// Helmet.JS() initalise inside of the express server for security
app.use(helmet());

// middleware json parser for req.body
app.use(express.json());

// Morgan logger - Logs api calls in the console
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Middleware for routes api dedicated to pulling transactions from the mongoDB atlas cluster
// Loading the router module from routes/transactions.js 
app.use('/api/v1/transactions', transactions);

// Production use only - Makes it so npm start will start the node server on the backend and also have access to the front end without having to start that seperatly.
if(process.env.NODE_ENV === 'production') {
    // Uses the ReactJS build folder in client 
    app.use(express.static('client/build'));

    // Get request to the front end to allow the front end to show on the page
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// The port the backend server listens to
const PORT = process.env.PORT || 5000;

// Use the variable port to point the node server to a port, whilst also console logging this on start up
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));