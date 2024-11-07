const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 5000

// Middleware to parse JSON requests
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
