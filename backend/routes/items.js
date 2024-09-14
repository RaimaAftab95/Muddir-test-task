const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// CREATE Item
router.post('/', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.send(newItem);
});

// READ Items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

module.exports = router;
