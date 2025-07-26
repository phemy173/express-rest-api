const { v4: uuidv4 } = require('uuid');

let items = [];

module.exports = {
  getAll: () => items,

  getById: (id) => items.find(item => item.id === id),

  create: ({ name, description }) => {
    const newItem = { id: uuidv4(), name, description };
    items.push(newItem);
    return newItem;
  },

  update: (id, { name, description }) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return null;
    items[index] = { id, name, description };
    return items[index];
  },

  delete: (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return false;
    items.splice(index, 1);
    return true;
  }
};
