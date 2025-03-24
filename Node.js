const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/time-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema for time tracking data
const userSchema = new mongoose.Schema({
  username: String,
  website: String,
  timeSpent: Number,
  category: String,  // e.g., 'productive', 'unproductive', 'neutral'
});

// Create model based on the schema
const User = mongoose.model('User', userSchema);

// Middleware to parse incoming JSON data
app.use(express.json());

// API route to log time spent on a website
app.post('/logTime', async (req, res) => {
  const { username, website, timeSpent, category } = req.body;

  // Create new user data entry and save it to the database
  const user = new User({ username, website, timeSpent, category });
  await user.save();
  res.send('Time logged successfully!');
});

// API route to get productivity analytics for a user
app.get('/getAnalytics', async (req, res) => {
  const { username } = req.query;

  // Aggregate time spent by category for the given user
  const data = await User.aggregate([
    { $match: { username } },  // Match the username
    { $group: { _id: "$category", totalTime: { $sum: "$timeSpent" } } },  // Group by category and sum time spent
  ]);
  res.json(data);  // Return the aggregated data
});

// Start the server on port 5000
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
