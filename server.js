const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Board = require('./board-schema');

const app = express();

// Enable CORS for all routes
app.use(cors());

// MongoDB connection string
// Replace 'your_database_url' with your actual connection string
const mongoDB = 'mongodb+srv://prodevelopers4131:94Wf1XiOPZzVZgxm@cluster0.z8agdho.mongodb.net/bandzoogle?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use this to log database requests for debugging
mongoose.set('debug', true);

// Define a simple route for GET request
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

// Define more routes as needed
app.get('/api/data', async (req, res) => {
  const data = await Board.find();
  res.json(data);
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
