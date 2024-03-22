const express = require('express');
const connectDB = require('./dbConnection');
const routes = require('./routes');
const cors = require("cors");


const corsOptions = {
  origin:"http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', () => {
    console.log('app running')
});
app.use('/api', routes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
