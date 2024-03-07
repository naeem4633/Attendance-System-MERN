const express = require('express');
const connectDB = require('./dbConnection');

const app = express();

// Connect to MongoDB
connectDB();

// Define routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
