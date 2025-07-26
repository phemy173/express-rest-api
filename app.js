// app.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import the items router
const itemsRouter = require('./routes/itemsRouter');

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the items router for all routes starting with /items
app.use('/items', itemsRouter);

// 404 handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
