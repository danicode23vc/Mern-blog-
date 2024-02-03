// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB connection string)
mongoose.connect('your-database-url', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

// Define routes
app.use('/api/auth', require('./routes/auth')); // Example auth routes

// Start the server
app.listen(PORT, () => {``
  console.log(`Server is running on port ${PORT}`);
});
