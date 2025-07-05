const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Tour = require('../models/Tour');

router.get('/', auth(['admin', 'sales', 'guide']), async (req, res) => {
  const tours = await Tour.findAll();
  res.json(tours);
});
router.post('/', auth(['admin', 'sales']), async (req, res) => {
  const tour = await Tour.create(req.body);
  res.json(tour);
});
// ... update, delete, detail
module.exports = router;