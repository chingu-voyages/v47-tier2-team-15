const express = require('express');
const { getGlobalData } = require('../controllers/globalController');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const globalData = await getGlobalData();
    res.json({ data: globalData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
