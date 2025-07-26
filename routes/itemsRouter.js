const express = require('express');
const router = express.Router();
const items = require('../data/items');

// GET all items
router.get('/', (req, res) => {
  res.json(items.getAll());
});

// GET item by ID
router.get('/:id', (req, res) => {
  const item = items.getById(req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// POST new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ error: 'Description is required and must be a non-empty string' });
  }
  const newItem = items.create({ name, description });
  res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', (req, res) => {
  const { name, description } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ error: 'Description is required and must be a non-empty string' });
  }
  const updatedItem = items.update(req.params.id, { name, description });
  if (!updatedItem) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(updatedItem);
});

// DELETE item
router.delete('/:id', (req, res) => {
  const deleted = items.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(204).send();
});

module.exports = router;
