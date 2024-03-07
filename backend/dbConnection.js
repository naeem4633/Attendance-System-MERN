const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/TMUC', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB connected');

    // Check if the TMUC database already exists
    const adminDB = mongoose.connection.db.admin();
    const databases = await adminDB.listDatabases();
    const existingDB = databases.databases.find(db => db.name === 'TMUC');

    // If TMUC database doesn't exist, create it
    if (!existingDB) {
      await mongoose.connection.db.createCollection('TMUC');
      console.log('TMUC database created');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;