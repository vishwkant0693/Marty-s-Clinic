const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/Marty's"; // Replace 'your-database-name' with your actual database name

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

module.exports = connectToMongo;