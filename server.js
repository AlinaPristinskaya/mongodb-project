// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
const { DB_HOST, PORT = 8080}=process.env
// Import routes
const getCars = require('./routes/getCars');

// Initialize express
const app = express();
// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000'  // This is the URL of your React app
}));

// Set up port for server to listen on


// ! [IMPORTANT]: Replace with your mongoDB URI string. You can get it from your Atlas cluster.


// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(DB_HOST , { useNewUrlParser: true }).then(
  () => { console.log('Successfully connected to the database!')
  app.listen(PORT) },
  err => { console.log('Could not connect to the database...' + err) 
process.exit(1)}
);

// Allow app to accept json and url encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes to be handled from: http://localhost:8080/blogs
app.use('/cars', getCars);



