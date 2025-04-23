const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/blogdb';
    console.log('Connecting to MongoDB with URI:', mongoURI);
    
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;