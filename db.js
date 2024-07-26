const mongoose = require('mongoose');
// define the mongodb connection url

const mongoURL = 'mongodb://0.0.0.0:27017/hotels'//Replace mydatabase name with your database name

// set up mongodb connection
mongoose.connect(mongoURL)
//Get the default connection
// Mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

// Define event listners for database connection
db.on('connected', () => {
  console.log('connected to MongoDb server');
});

db.on('error', (err) => {
  console.log(' MongoDb connection error:',err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the database connection

module.exports = db;