// app.js
const express = require('express');
const app = express();
const itemsRouter = require('./routes/itemsRouter');

app.use(express.json()); // Middleware

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Routes
app.use('/items', itemsRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
